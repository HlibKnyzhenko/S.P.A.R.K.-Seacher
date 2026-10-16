-- Run this once in Supabase Dashboard -> SQL Editor.
-- The browser may call only the two RPC functions below. Direct table access is blocked.

create table if not exists public.spark_analytics_counts (
  singleton boolean primary key default true check (singleton),
  visitors bigint not null default 0 check (visitors >= 0),
  visits bigint not null default 0 check (visits >= 0),
  searches bigint not null default 0 check (searches >= 0),
  updated_at timestamptz not null default now()
);

insert into public.spark_analytics_counts (singleton)
values (true)
on conflict (singleton) do nothing;

create table if not exists public.spark_analytics_limits (
  visitor_id uuid primary key,
  first_seen_at timestamptz not null default now(),
  last_visit_at timestamptz,
  last_search_at timestamptz
);

alter table public.spark_analytics_counts enable row level security;
alter table public.spark_analytics_limits enable row level security;
revoke all on table public.spark_analytics_counts from anon, authenticated;
revoke all on table public.spark_analytics_limits from anon, authenticated;

create or replace function public.get_spark_analytics_counts()
returns table(visitors bigint, visits bigint, searches bigint)
language sql
security definer
set search_path = ''
stable
as $$
  select c.visitors, c.visits, c.searches
  from public.spark_analytics_counts as c
  where c.singleton = true;
$$;

create or replace function public.record_spark_analytics(
  p_event text,
  p_visitor_id uuid
)
returns table(visitors bigint, visits bigint, searches bigint)
language plpgsql
security definer
set search_path = ''
as $$
declare
  is_new_visitor boolean := false;
  counted boolean := false;
  changed integer := 0;
begin
  if p_event not in ('visit', 'search') or p_visitor_id is null then
    raise exception 'Invalid analytics event';
  end if;

  if p_event = 'visit' then
    insert into public.spark_analytics_limits (visitor_id, last_visit_at)
    values (p_visitor_id, now())
    on conflict (visitor_id) do nothing;

    is_new_visitor := found;
    if is_new_visitor then
      counted := true;
    else
      update public.spark_analytics_limits
      set last_visit_at = now()
      where visitor_id = p_visitor_id
        and last_visit_at <= now() - interval '12 hours';
      get diagnostics changed = row_count;
      counted := changed = 1;
    end if;

    if is_new_visitor then
      update public.spark_analytics_counts
      set visitors = visitors + 1, visits = visits + 1, updated_at = now()
      where singleton = true;
    elsif counted then
      update public.spark_analytics_counts
      set visits = visits + 1, updated_at = now()
      where singleton = true;
    end if;
  else
    insert into public.spark_analytics_limits (visitor_id, last_search_at)
    values (p_visitor_id, now())
    on conflict (visitor_id) do nothing;

    counted := found;
    if not counted then
      update public.spark_analytics_limits
      set last_search_at = now()
      where visitor_id = p_visitor_id
        and (last_search_at is null or last_search_at <= now() - interval '1 minute');
      get diagnostics changed = row_count;
      counted := changed = 1;
    end if;

    if counted then
      update public.spark_analytics_counts
      set searches = searches + 1, updated_at = now()
      where singleton = true;
    end if;
  end if;

  return query
  select c.visitors, c.visits, c.searches
  from public.spark_analytics_counts as c
  where c.singleton = true;
end;
$$;

revoke all on function public.get_spark_analytics_counts() from public;
revoke all on function public.record_spark_analytics(text, uuid) from public;
grant execute on function public.get_spark_analytics_counts() to anon, authenticated;
grant execute on function public.record_spark_analytics(text, uuid) to anon, authenticated;
