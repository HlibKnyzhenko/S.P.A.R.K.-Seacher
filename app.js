const universities = [
  { name: "University of California, San Diego", city: "San Diego, California", state: "California", majors: ["computer-science", "biology", "engineering"], acceptance: 24, tuition: 48000, gpa: 3.8, sat: 1460, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "San Jose State University", city: "San Jose, California", state: "California", majors: ["computer-science", "business", "engineering", "design"], acceptance: 75, tuition: 29000, gpa: 3.4, sat: 1240, ielts: 6.5, det: 115, campus: "city", grant: null, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Washington", city: "Seattle, Washington", state: "Washington", majors: ["computer-science", "biology", "engineering", "business"], acceptance: 53, tuition: 42000, gpa: 3.7, sat: 1400, ielts: 6.5, det: 120, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "Northeastern University", city: "Boston, Massachusetts", state: "Massachusetts", majors: ["computer-science", "business", "engineering", "psychology"], acceptance: 6, tuition: 65000, gpa: 3.8, sat: 1490, ielts: 7, det: 125, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Texas at Austin", city: "Austin, Texas", state: "Texas", majors: ["computer-science", "business", "engineering", "biology"], acceptance: 29, tuition: 46000, gpa: 3.7, sat: 1370, ielts: 6.5, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "Purdue University", city: "West Lafayette, Indiana", state: "Indiana", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 50, tuition: 44000, gpa: 3.6, sat: 1350, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Illinois Urbana-Champaign", city: "Champaign, Illinois", state: "Illinois", majors: ["computer-science", "engineering", "business", "design"], acceptance: 45, tuition: 41000, gpa: 3.7, sat: 1420, ielts: 6.5, det: 120, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "Florida International University", city: "Miami, Florida", state: "Florida", majors: ["computer-science", "business", "psychology", "biology"], acceptance: 64, tuition: 24000, gpa: 3.4, sat: 1190, ielts: 6, det: 105, campus: "city", grant: null, image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "Arizona State University", city: "Tempe, Arizona", state: "Arizona", majors: ["computer-science", "business", "engineering", "psychology", "design"], acceptance: 90, tuition: 33000, gpa: 3.3, sat: 1210, ielts: 6, det: 105, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Rochester", city: "Rochester, New York", state: "New York", majors: ["biology", "engineering", "psychology", "business"], acceptance: 39, tuition: 64000, gpa: 3.7, sat: 1430, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Stanford University", city: "Stanford, California", state: "California", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 4, tuition: 89000, gpa: 3.9, sat: 1510, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Southern California", city: "Los Angeles, California", state: "California", majors: ["computer-science", "business", "engineering", "design"], acceptance: 10, tuition: 84000, gpa: 3.8, sat: 1450, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "University of California, Berkeley", city: "Berkeley, California", state: "California", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 11, tuition: 51000, gpa: 3.9, sat: 1500, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "University of California, Los Angeles", city: "Los Angeles, California", state: "California", majors: ["computer-science", "biology", "psychology", "design"], acceptance: 9, tuition: 50000, gpa: 3.9, sat: 1490, ielts: 7, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "New York University", city: "New York, New York", state: "New York", majors: ["computer-science", "business", "psychology", "design"], acceptance: 8, tuition: 88000, gpa: 3.8, sat: 1470, ielts: 7, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Columbia University", city: "New York, New York", state: "New York", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 4, tuition: 90000, gpa: 3.9, sat: 1520, ielts: 7.5, det: 130, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Boston University", city: "Boston, Massachusetts", state: "Massachusetts", majors: ["computer-science", "business", "psychology", "biology"], acceptance: 11, tuition: 70000, gpa: 3.8, sat: 1450, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "Massachusetts Institute of Technology", city: "Cambridge, Massachusetts", state: "Massachusetts", majors: ["computer-science", "engineering", "biology"], acceptance: 4, tuition: 90000, gpa: 3.9, sat: 1540, ielts: 7.5, det: 130, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "Harvard University", city: "Cambridge, Massachusetts", state: "Massachusetts", majors: ["computer-science", "business", "biology", "psychology"], acceptance: 3, tuition: 90000, gpa: 3.9, sat: 1530, ielts: 7.5, det: 130, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "Georgia Institute of Technology", city: "Atlanta, Georgia", state: "Georgia", majors: ["computer-science", "engineering", "business", "design"], acceptance: 16, tuition: 38000, gpa: 3.8, sat: 1450, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "Carnegie Mellon University", city: "Pittsburgh, Pennsylvania", state: "Pennsylvania", majors: ["computer-science", "engineering", "business", "design"], acceptance: 11, tuition: 85000, gpa: 3.9, sat: 1510, ielts: 7.5, det: 125, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Michigan", city: "Ann Arbor, Michigan", state: "Michigan", majors: ["computer-science", "engineering", "business", "psychology"], acceptance: 18, tuition: 80000, gpa: 3.8, sat: 1460, ielts: 7, det: 120, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "Pennsylvania State University", city: "University Park, Pennsylvania", state: "Pennsylvania", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 55, tuition: 46000, gpa: 3.5, sat: 1300, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "Rutgers University", city: "New Brunswick, New Jersey", state: "New Jersey", majors: ["computer-science", "business", "engineering", "biology"], acceptance: 66, tuition: 41000, gpa: 3.5, sat: 1280, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Texas at Dallas", city: "Richardson, Texas", state: "Texas", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 85, tuition: 43000, gpa: 3.4, sat: 1240, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Minnesota Twin Cities", city: "Minneapolis, Minnesota", state: "Minnesota", majors: ["computer-science", "engineering", "biology", "psychology"], acceptance: 75, tuition: 40000, gpa: 3.5, sat: 1300, ielts: 6.5, det: 115, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Wisconsin-Madison", city: "Madison, Wisconsin", state: "Wisconsin", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 49, tuition: 45000, gpa: 3.6, sat: 1360, ielts: 6.5, det: 120, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "The Ohio State University", city: "Columbus, Ohio", state: "Ohio", majors: ["computer-science", "business", "engineering", "psychology"], acceptance: 53, tuition: 40000, gpa: 3.6, sat: 1330, ielts: 6.5, det: 115, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "Virginia Tech", city: "Blacksburg, Virginia", state: "Virginia", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 57, tuition: 39000, gpa: 3.6, sat: 1320, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "George Mason University", city: "Fairfax, Virginia", state: "Virginia", majors: ["computer-science", "business", "engineering", "psychology"], acceptance: 90, tuition: 39000, gpa: 3.2, sat: 1150, ielts: 6.5, det: 105, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Drexel University", city: "Philadelphia, Pennsylvania", state: "Pennsylvania", majors: ["computer-science", "engineering", "business", "design"], acceptance: 80, tuition: 61000, gpa: 3.4, sat: 1230, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "Iowa State University", city: "Ames, Iowa", state: "Iowa", majors: ["computer-science", "engineering", "business", "design"], acceptance: 90, tuition: 31000, gpa: 3.2, sat: 1120, ielts: 6, det: 105, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "Temple University", city: "Philadelphia, Pennsylvania", state: "Pennsylvania", majors: ["computer-science", "business", "psychology", "biology"], acceptance: 80, tuition: 45000, gpa: 3.3, sat: 1180, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "Rochester Institute of Technology", city: "Rochester, New York", state: "New York", majors: ["computer-science", "engineering", "design", "business"], acceptance: 67, tuition: 57000, gpa: 3.5, sat: 1290, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "Syracuse University", city: "Syracuse, New York", state: "New York", majors: ["business", "psychology", "biology", "design"], acceptance: 45, tuition: 68000, gpa: 3.6, sat: 1340, ielts: 6.5, det: 115, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "Yale University", city: "New Haven, Connecticut", state: "Connecticut", majors: ["computer-science", "biology", "psychology", "business"], acceptance: 5, tuition: 90000, gpa: 3.9, sat: 1530, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Princeton University", city: "Princeton, New Jersey", state: "New Jersey", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 4, tuition: 90000, gpa: 3.9, sat: 1530, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Duke University", city: "Durham, North Carolina", state: "North Carolina", majors: ["computer-science", "engineering", "biology", "psychology"], acceptance: 6, tuition: 90000, gpa: 3.9, sat: 1510, ielts: 7.5, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "Northwestern University", city: "Evanston, Illinois", state: "Illinois", majors: ["computer-science", "engineering", "business", "psychology"], acceptance: 7, tuition: 90000, gpa: 3.9, sat: 1510, ielts: 7.5, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "Rice University", city: "Houston, Texas", state: "Texas", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 8, tuition: 85000, gpa: 3.9, sat: 1500, ielts: 7, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "Vanderbilt University", city: "Nashville, Tennessee", state: "Tennessee", majors: ["computer-science", "engineering", "biology", "psychology"], acceptance: 7, tuition: 89000, gpa: 3.9, sat: 1500, ielts: 7, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "Emory University", city: "Atlanta, Georgia", state: "Georgia", majors: ["biology", "business", "psychology", "computer-science"], acceptance: 11, tuition: 85000, gpa: 3.8, sat: 1460, ielts: 7, det: 120, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "Tulane University", city: "New Orleans, Louisiana", state: "Louisiana", majors: ["business", "biology", "psychology", "design"], acceptance: 11, tuition: 82000, gpa: 3.8, sat: 1440, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "Case Western Reserve University", city: "Cleveland, Ohio", state: "Ohio", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 27, tuition: 68000, gpa: 3.7, sat: 1410, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Maryland, College Park", city: "College Park, Maryland", state: "Maryland", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 44, tuition: 44000, gpa: 3.7, sat: 1370, ielts: 6.5, det: 120, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Colorado Boulder", city: "Boulder, Colorado", state: "Colorado", majors: ["computer-science", "engineering", "business", "psychology"], acceptance: 80, tuition: 43000, gpa: 3.5, sat: 1250, ielts: 6.5, det: 110, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Arizona", city: "Tucson, Arizona", state: "Arizona", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 87, tuition: 40000, gpa: 3.3, sat: 1150, ielts: 6.5, det: 105, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Oregon State University", city: "Corvallis, Oregon", state: "Oregon", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 83, tuition: 38000, gpa: 3.3, sat: 1140, ielts: 6.5, det: 105, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Oregon", city: "Eugene, Oregon", state: "Oregon", majors: ["business", "psychology", "biology", "design"], acceptance: 93, tuition: 39000, gpa: 3.2, sat: 1120, ielts: 6.5, det: 105, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "Michigan State University", city: "East Lansing, Michigan", state: "Michigan", majors: ["computer-science", "business", "engineering", "psychology"], acceptance: 88, tuition: 45000, gpa: 3.3, sat: 1160, ielts: 6.5, det: 110, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "Indiana University Bloomington", city: "Bloomington, Indiana", state: "Indiana", majors: ["computer-science", "business", "psychology", "design"], acceptance: 82, tuition: 43000, gpa: 3.4, sat: 1200, ielts: 6.5, det: 110, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Cincinnati", city: "Cincinnati, Ohio", state: "Ohio", majors: ["computer-science", "engineering", "business", "design"], acceptance: 86, tuition: 33000, gpa: 3.3, sat: 1160, ielts: 6.5, det: 105, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Nebraska-Lincoln", city: "Lincoln, Nebraska", state: "Nebraska", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 78, tuition: 29000, gpa: 3.2, sat: 1100, ielts: 6, det: 100, campus: "college", grant: "merit", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=85" },
  { name: "University of South Florida", city: "Tampa, Florida", state: "Florida", majors: ["computer-science", "engineering", "business", "biology"], acceptance: 44, tuition: 29000, gpa: 3.6, sat: 1270, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Central Florida", city: "Orlando, Florida", state: "Florida", majors: ["computer-science", "engineering", "business", "psychology"], acceptance: 41, tuition: 28000, gpa: 3.6, sat: 1280, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=600&q=85" },
  { name: "University of Miami", city: "Coral Gables, Florida", state: "Florida", majors: ["business", "biology", "psychology", "computer-science"], acceptance: 19, tuition: 85000, gpa: 3.8, sat: 1420, ielts: 7, det: 120, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Fordham University", city: "New York, New York", state: "New York", majors: ["business", "psychology", "biology", "computer-science"], acceptance: 54, tuition: 66000, gpa: 3.6, sat: 1320, ielts: 6.5, det: 115, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Loyola University Chicago", city: "Chicago, Illinois", state: "Illinois", majors: ["business", "psychology", "biology", "computer-science"], acceptance: 79, tuition: 54000, gpa: 3.3, sat: 1160, ielts: 6.5, det: 110, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "American University", city: "Washington, D.C.", state: "District of Columbia", majors: ["business", "psychology", "biology", "computer-science"], acceptance: 36, tuition: 67000, gpa: 3.6, sat: 1340, ielts: 7, det: 115, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "Clark University", city: "Worcester, Massachusetts", state: "Massachusetts", majors: ["psychology", "biology", "business", "computer-science"], acceptance: 42, tuition: 60000, gpa: 3.6, sat: 1300, ielts: 6.5, det: 115, campus: "city", grant: "merit", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "Dartmouth College", city: "Hanover, New Hampshire", state: "New Hampshire", majors: ["computer-science", "engineering", "biology", "business"], acceptance: 6, tuition: 90000, gpa: 3.9, sat: 1510, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Brown University", city: "Providence, Rhode Island", state: "Rhode Island", majors: ["computer-science", "biology", "engineering", "design"], acceptance: 5, tuition: 90000, gpa: 3.9, sat: 1510, ielts: 7.5, det: 130, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Amherst College", city: "Amherst, Massachusetts", state: "Massachusetts", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 10, tuition: 90000, gpa: 3.9, sat: 1490, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" },
  { name: "Bowdoin College", city: "Brunswick, Maine", state: "Maine", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 8, tuition: 88000, gpa: 3.9, sat: 1490, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=85" },
  { name: "Swarthmore College", city: "Swarthmore, Pennsylvania", state: "Pennsylvania", majors: ["computer-science", "engineering", "biology", "psychology"], acceptance: 7, tuition: 89000, gpa: 3.9, sat: 1500, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=85" },
  { name: "Pomona College", city: "Claremont, California", state: "California", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 7, tuition: 89000, gpa: 3.9, sat: 1500, ielts: 7.5, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1599687269700-28d3e3d10b45?auto=format&fit=crop&w=600&q=85" },
  { name: "Colby College", city: "Waterville, Maine", state: "Maine", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 8, tuition: 87000, gpa: 3.8, sat: 1450, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=85" },
  { name: "Middlebury College", city: "Middlebury, Vermont", state: "Vermont", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 10, tuition: 89000, gpa: 3.9, sat: 1480, ielts: 7, det: 130, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85" },
  { name: "Tufts University", city: "Medford, Massachusetts", state: "Massachusetts", majors: ["computer-science", "engineering", "biology", "psychology"], acceptance: 10, tuition: 90000, gpa: 3.9, sat: 1490, ielts: 7, det: 125, campus: "city", grant: "need", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=85" },
  { name: "Wellesley College", city: "Wellesley, Massachusetts", state: "Massachusetts", majors: ["computer-science", "biology", "psychology", "economics"], acceptance: 14, tuition: 89000, gpa: 3.9, sat: 1500, ielts: 7, det: 125, campus: "college", grant: "need", image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=85" }
];

const grantLabels = { "need-based": "need-based aid", merit: "merit scholarship", "full-need": "100% demonstrated need", "full-ride": "full-cost program" };
const policyLabels = { "need-blind": "need-blind", "need-aware": "need-aware", "no-need-aid": "нет institutional need-based aid для F-1", limited: "ограниченные scholarship options", "program-specific": "условия отдельной программы" };
const financeStatuses = {
  fullNeedBlind: { grantTypes: ["need-based", "full-need"], aidPolicy: "need-blind", note: "100% подтверждённой финансовой нужды; need-blind для international first-year." },
  fullNeedAware: { grantTypes: ["need-based", "full-need"], aidPolicy: "need-aware", note: "100% подтверждённой финансовой нужды для admitted students; запрос aid учитывается при рассмотрении." },
  limitedFullNeed: { grantTypes: ["need-based", "full-need"], aidPolicy: "limited", note: "Фонд для international applicants ограничен; при зачислении с aid вуз покрывает 100% calculated need." },
  limitedFullNeedAware: { grantTypes: ["need-based", "full-need"], aidPolicy: "need-aware", note: "Фонд для international applicants ограничен; запрос aid учитывается при admission, а admitted students получают 100% calculated need." },
  limitedNeed: { grantTypes: ["need-based"], aidPolicy: "limited", note: "Need-based помощь доступна ограниченному числу international applicants." },
  limitedNeedAware: { grantTypes: ["need-based"], aidPolicy: "need-aware", note: "Need-based помощь ограничена, а запрос financial aid учитывается при admission." },
  limitedNeedMerit: { grantTypes: ["need-based", "merit"], aidPolicy: "limited", note: "Есть ограниченные need-based и merit варианты для international applicants." },
  limitedNeedAwareMerit: { grantTypes: ["need-based", "merit"], aidPolicy: "need-aware", note: "Есть ограниченные need-based и merit варианты; запрос financial aid учитывается при admission." },
  meritOnly: { grantTypes: ["merit"], aidPolicy: "no-need-aid", note: "Need-based помощь для F-1 не заявлена; возможны конкурсные merit scholarships." },
  limitedScholarships: { grantTypes: ["merit"], aidPolicy: "limited", note: "Доступны отдельные ограниченные scholarships; полного финансирования не обещано." },
  fullCostProgram: { grantTypes: ["merit", "full-ride"], aidPolicy: "program-specific", note: "Есть отдельная конкурсная программа с возможным полным покрытием при соблюдении её условий." },
  noInstitutionalAid: { grantTypes: [], aidPolicy: "no-need-aid", note: "Для F-1 нет заявленной institutional need-based помощи; требуется подтверждение собственных средств." }
};

const financialAidProfiles = {
  "University of California, San Diego": { status: "limitedScholarships", source: "https://admissions.ucsd.edu/why/cost-aid/" },
  "San Jose State University": { status: "limitedScholarships", source: "https://www.sjsu.edu/isss/resources/scholarships/index.php" },
  "University of Washington": { status: "noInstitutionalAid", source: "https://admit.washington.edu/costs/aid/" },
  "Northeastern University": { status: "meritOnly", source: "https://studentfinance.northeastern.edu/applying-for-aid/international-students/" },
  "University of Texas at Austin": { status: "limitedScholarships", source: "https://admissions.utexas.edu/cost-aid/financial-aid/" },
  "Purdue University": { status: "noInstitutionalAid", source: "https://www.admissions.purdue.edu/costsandfinaid/scholarships.php" },
  "University of Illinois Urbana-Champaign": { status: "limitedScholarships", source: "https://www.admissions.illinois.edu/financial-aid/" },
  "Florida International University": { status: "limitedScholarships", source: "https://admissions.fiu.edu/international/" },
  "Arizona State University": { status: "meritOnly", source: "https://admission.asu.edu/cost-aid/international" },
  "University of Rochester": { status: "limitedFullNeedAware", source: "https://admissions.rochester.edu/applying/international-students/" },
  "Stanford University": { status: "fullNeedAware", source: "https://admission.stanford.edu/apply/international/" },
  "University of Southern California": { status: "meritOnly", source: "https://admission.usc.edu/prospective-students/how-to-apply/international-students/" },
  "University of California, Berkeley": { status: "noInstitutionalAid", source: "https://admissions.berkeley.edu/cost/apply-for-financial-aid/types-of-aid/" },
  "University of California, Los Angeles": { status: "noInstitutionalAid", source: "https://admission.ucla.edu/apply/international-applicants" },
  "New York University": { status: "limitedNeedAwareMerit", source: "https://www.nyu.edu/admissions/financial-aid-and-scholarships.html" },
  "Columbia University": { status: "fullNeedAware", source: "https://undergrad.admissions.columbia.edu/affordability" },
  "Boston University": { status: "meritOnly", source: "https://www.bu.edu/finaid/undergraduate-students/international/" },
  "Massachusetts Institute of Technology": { status: "fullNeedBlind", source: "https://sfs.mit.edu/undergraduate-students/the-cost-of-attendance/making-mit-affordable/" },
  "Harvard University": { status: "fullNeedBlind", source: "https://college.harvard.edu/financial-aid/how-aid-works" },
  "Georgia Institute of Technology": { status: "limitedScholarships", source: "https://isss.oie.gatech.edu/isss/financial-assistance-international-students" },
  "Carnegie Mellon University": { status: "noInstitutionalAid", source: "https://www.cmu.edu/admission/admission/international-applicants" },
  "University of Michigan": { status: "limitedScholarships", source: "https://admissions.umich.edu/costs-aid/financial-aid" },
  "Pennsylvania State University": { status: "limitedScholarships", source: "https://admissions.psu.edu/costs-aid/financial-aid/" },
  "Rutgers University": { status: "meritOnly", source: "https://admissions.rutgers.edu/costs-and-aid/scholarships" },
  "University of Texas at Dallas": { status: "limitedScholarships", source: "https://dox.utdallas.edu/international-center/scholarships" },
  "University of Minnesota Twin Cities": { status: "meritOnly", source: "https://admissions.tc.umn.edu/global-excellence-scholarships" },
  "University of Wisconsin-Madison": { status: "fullCostProgram", source: "https://admissions.wisc.edu/international-scholarships/" },
  "The Ohio State University": { status: "noInstitutionalAid", source: "https://undergrad.osu.edu/cost-and-aid/merit-based-scholarships" },
  "Virginia Tech": { status: "limitedScholarships", source: "https://finaid.vt.edu/undergraduate/eligibility.html" },
  "George Mason University": { status: "meritOnly", source: "https://www.gmu.edu/international/financial-aid" },
  "Drexel University": { status: "limitedScholarships", source: "https://drexel.edu/drexelcentral/finaid/prospective-students/international-students/" },
  "Iowa State University": { status: "limitedScholarships", source: "https://www.financialaid.iastate.edu/types-of-aid/scholarships/" },
  "Temple University": { status: "limitedScholarships", source: "https://admissions.temple.edu/costs-scholarships-aid/scholarships" },
  "Rochester Institute of Technology": { status: "limitedScholarships", source: "https://www.rit.edu/admissions/aid-scholarships" },
  "Syracuse University": { status: "limitedScholarships", source: "https://www.syracuse.edu/admissions/cost-and-aid/" },
  "Yale University": { status: "fullNeedBlind", source: "https://admissions.yale.edu/international" },
  "Princeton University": { status: "fullNeedBlind", source: "https://admission.princeton.edu/apply/international-students" },
  "Duke University": { status: "limitedNeedAwareMerit", source: "https://admissions.duke.edu/financial-support/" },
  "Northwestern University": { status: "fullNeedAware", source: "https://admissions.northwestern.edu/apply/identities/international.html" },
  "Rice University": { status: "limitedNeedAware", source: "https://admission.rice.edu/apply/first-year-international-applicants" },
  "Vanderbilt University": { status: "fullNeedAware", source: "https://admissions.vanderbilt.edu/affordability/international-costs-and-finances/" },
  "Emory University": { status: "limitedNeed", source: "https://apply.emory.edu/apply/international" },
  "Tulane University": { status: "fullCostProgram", source: "https://admission.tulane.edu/international/aid" },
  "Case Western Reserve University": { status: "limitedNeedMerit", source: "https://case.edu/financialaid/undergraduates/international-students" },
  "University of Maryland, College Park": { status: "limitedScholarships", source: "https://admissions.umd.edu/finance/financial-aid" },
  "University of Colorado Boulder": { status: "limitedScholarships", source: "https://www.colorado.edu/scholarships/international" },
  "University of Arizona": { status: "meritOnly", source: "https://international.arizona.edu/financial-aid" },
  "Oregon State University": { status: "limitedScholarships", source: "https://admissions.oregonstate.edu/costs-and-financial-aid" },
  "University of Oregon": { status: "meritOnly", source: "https://admissions.uoregon.edu/costs-aid" },
  "Michigan State University": { status: "meritOnly", source: "https://admissions.msu.edu/cost-aid" },
  "Indiana University Bloomington": { status: "meritOnly", source: "https://admissions.indiana.edu/cost-financial-aid/index.html" },
  "University of Cincinnati": { status: "meritOnly", source: "https://admissions.uc.edu/information/international.html" },
  "University of Nebraska-Lincoln": { status: "meritOnly", source: "https://admissions.unl.edu/cost/financial-aid/" },
  "University of South Florida": { status: "meritOnly", source: "https://www.usf.edu/admissions/international/next-steps/financial-support.aspx" },
  "University of Central Florida": { status: "meritOnly", source: "https://www.ucf.edu/financial-aid/international-students/" },
  "University of Miami": { status: "meritOnly", source: "https://admissions.miami.edu/undergraduate/application-process/financial-aid/index.html" },
  "Fordham University": { status: "meritOnly", source: "https://www.fordham.edu/undergraduate-admission/tuition-and-financial-aid/" },
  "Loyola University Chicago": { status: "meritOnly", source: "https://www.luc.edu/finaid/" },
  "American University": { status: "meritOnly", source: "https://www.american.edu/financialaid/" },
  "Clark University": { status: "meritOnly", source: "https://www.clarku.edu/admissions/undergraduate-admissions/affordability-and-aid/" },
  "Dartmouth College": { status: "fullNeedBlind", source: "https://admissions.dartmouth.edu/apply-dartmouth/universal-need-blind-policy" },
  "Brown University": { status: "fullNeedBlind", source: "https://admission.brown.edu/international/financial-aid" },
  "Amherst College": { status: "fullNeedBlind", source: "https://admission.amherst.edu/register/qbrdsupplement" },
  "Bowdoin College": { status: "fullNeedBlind", source: "https://www.bowdoin.edu/admissions/apply/international-students/" },
  "Swarthmore College": { status: "fullNeedAware", source: "https://digital.swarthmore.edu/viewbook/" },
  "Pomona College": { status: "limitedFullNeedAware", source: "https://www.pomona.edu/financial-aid/applying-for-aid/international-aid" },
  "Colby College": { status: "fullNeedAware", source: "https://afa.colby.edu/apply/requirements/international-applicants/" },
  "Middlebury College": { status: "fullNeedAware", source: "https://www.middlebury.edu/college/admissions/application-instructions-and-deadlines" },
  "Tufts University": { status: "limitedFullNeed", source: "https://admissions.tufts.edu/tuition-and-aid/applying-for-aid/international-student-aid/" },
  "Wellesley College": { status: "limitedFullNeedAware", source: "https://www.wellesley.edu/admission-aid/student-financial-services/understanding-financial-aid/apply-for-aid/international-students" }
};

universities.forEach((university) => {
  const profile = financialAidProfiles[university.name] || { status: "limitedScholarships", source: "" };
  const status = financeStatuses[profile.status];
  university.grantTypes = status.grantTypes;
  university.aidPolicy = status.aidPolicy;
  university.financialAidNote = status.note;
  university.aidSource = profile.source;
});

const form = document.querySelector("#profileForm");
const resultsList = document.querySelector("#resultsList");
const template = document.querySelector("#universityTemplate");
const gpa = document.querySelector("#gpa");
const gpaOutput = document.querySelector("#gpaOutput");
const field = (name) => new FormData(form).get(name);

const analytics = (() => {
  const config = window.SUPABASE_CONFIG || {};
  const storageKey = "spark-searcher-visitor-id";
  const localRateLimits = { visit: 20 * 60 * 1000, search: 45 * 1000 };
  let client;

  const updateCounters = (counts) => {
    if (!counts) return;
    document.querySelector("#visitorCount").textContent = Number(counts.visitors).toLocaleString("ru-RU");
    document.querySelector("#visitCount").textContent = Number(counts.visits).toLocaleString("ru-RU");
    document.querySelector("#searchCount").textContent = Number(counts.searches).toLocaleString("ru-RU");
  };

  const getVisitorId = () => {
    let visitorId = localStorage.getItem(storageKey);
    if (!visitorId) {
      visitorId = crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
        const random = Math.floor(Math.random() * 16);
        return (character === "x" ? random : (random & 0x3) | 0x8).toString(16);
      });
      localStorage.setItem(storageKey, visitorId);
    }
    return visitorId;
  };

  const getClient = () => {
    if (!client && window.supabase && config.url && config.publishableKey) {
      client = window.supabase.createClient(config.url, config.publishableKey);
    }
    return client;
  };

  const fetchCounters = async () => {
    const supabase = getClient();
    if (!supabase) return;
    const { data, error } = await supabase.rpc("get_spark_analytics_counts");
    if (!error) updateCounters(data?.[0]);
  };

  const record = async (event) => {
    const supabase = getClient();
    if (!supabase) return;
    const rateKey = `spark-searcher-last-${event}`;
    const lastRecorded = Number(localStorage.getItem(rateKey) || 0);
    if (Date.now() - lastRecorded < localRateLimits[event]) {
      fetchCounters();
      return;
    }

    localStorage.setItem(rateKey, String(Date.now()));
    const { data, error } = await supabase.rpc("record_spark_analytics", {
      p_event: event,
      p_visitor_id: getVisitorId()
    });

    if (error) {
      localStorage.removeItem(rateKey);
      fetchCounters();
      return;
    }
    updateCounters(data?.[0]);
  };

  return { start: () => record("visit"), record };
})();

function profile() {
  return { major: field("major"), state: field("state"), gpa: Number(field("gpa")), sat: field("sat") === "none" ? null : Number(field("sat")), ielts: field("ielts") === "none" ? null : Number(field("ielts")), det: field("det") === "none" ? null : Number(field("det")), budget: Number(field("budget")), difficulty: field("difficulty"), grantType: field("grantType"), aidPolicy: field("aidPolicy"), fullGrant: field("fullGrant") === "on", campus: field("campus") };
}

function chance(university, user) {
  if (user.gpa >= university.gpa && (!user.sat || user.sat >= university.sat - 30)) return "Запасной";
  if (user.gpa >= university.gpa - 0.2 && (!user.sat || user.sat >= university.sat - 100)) return "Реалистично";
  return "Цель";
}

function score(university, user) {
  let value = 28;
  if (user.major === "any" || university.majors.includes(user.major)) value += 31;
  if (user.state === "any") value += 7;
  else if (university.state === user.state) value += 19;
  const gpaGap = user.gpa - university.gpa;
  value += Math.max(0, 22 - Math.abs(gpaGap) * 38);
  if (user.sat) value += Math.max(0, 8 - Math.abs(user.sat - university.sat) / 55);
  else value += 4;
  if (user.ielts) value += user.ielts >= university.ielts ? 5 : -8;
  if (user.det) value += user.det >= university.det ? 5 : -8;
  if (university.tuition <= user.budget) value += 12;
  else value -= Math.min(13, (university.tuition - user.budget) / 2200);
  if (user.campus === "any" || university.campus === user.campus) value += 8;
  if (user.fullGrant && (university.grantTypes.includes("full-need") || university.grantTypes.includes("full-ride"))) value += 14;
  if (user.grantType !== "any" && university.grantTypes.includes(user.grantType)) value += 10;
  if (user.aidPolicy !== "any" && university.aidPolicy === user.aidPolicy) value += 8;
  if (user.difficulty === "ambitious") value += university.acceptance < 35 ? 7 : 0;
  if (user.difficulty === "accessible") value += university.acceptance >= 45 ? 7 : 0;
  return Math.max(35, Math.min(98, Math.round(value)));
}

function reason(university, user) {
  const notes = [];
  if (user.major === "any" || university.majors.includes(user.major)) notes.push("сильное направление");
  if (university.state === user.state) notes.push("выбранный штат");
  if (university.tuition <= user.budget) notes.push("укладывается в бюджет");
  if (notes.length === 0) notes.push("подходит по академическому профилю");
  return `Подходит за счёт: ${notes.slice(0, 2).join(" и ")}.`;
}

function renderResults() {
  const user = profile();
  const eligible = universities.filter((university) => {
    const hasFullGrant = university.grantTypes.includes("full-need") || university.grantTypes.includes("full-ride");
    const matchesGrant = user.grantType === "any" || university.grantTypes.includes(user.grantType);
    const matchesPolicy = user.aidPolicy === "any" || university.aidPolicy === user.aidPolicy;
    return (!user.fullGrant || hasFullGrant) && matchesGrant && matchesPolicy;
  });
  const ranked = eligible.map((university) => ({ university, score: score(university, user) })).sort((a, b) => b.score - a.score).slice(0, 6);
  resultsList.replaceChildren();
  document.querySelector("#resultCount").textContent = ranked.length;
  document.querySelector("#resultsEyebrow").textContent = `США · GPA ${user.gpa.toFixed(1)} · ${user.major === "any" ? "любое направление" : "подбор по направлению"}`;
  const fundingMessage = user.fullGrant ? "Показаны только вузы с подтверждённой политикой 100% demonstrated need или отдельной full-cost программой." : user.grantType !== "any" ? `Фильтр: ${grantLabels[user.grantType]}.` : "Финансовые статусы сверены для international first-year applicants (F-1).";
  document.querySelector("#insight").innerHTML = `<i data-lucide="badge-check"></i><span>${fundingMessage} Откройте официальный источник в карточке перед подачей.</span>`;

  if (!ranked.length) {
    resultsList.innerHTML = '<p class="empty-state">По этому сочетанию фильтров нет вариантов в текущем каталоге. Попробуйте снять один из финансовых фильтров.</p>';
    lucide.createIcons();
    return;
  }

  ranked.forEach(({ university, score: fitScore }, index) => {
    const node = template.content.cloneNode(true);
    const fit = chance(university, user);
    const className = fit === "Цель" ? "target" : fit === "Реалистично" ? "match" : "safe";
    node.querySelector(".card-image").src = university.image;
    node.querySelector(".card-image").alt = `Кампус ${university.name}`;
    const badge = node.querySelector(".fit-badge");
    node.querySelector(".university-card").style.setProperty("--item-index", index);
    badge.textContent = fit;
    badge.classList.add(className);
    node.querySelector("h3").textContent = university.name;
    node.querySelector(".location span").textContent = university.city;
    node.querySelector(".metrics").innerHTML = `<span class="metric">приём ${university.acceptance}%</span><span class="metric">GPA ${university.gpa.toFixed(1)}</span><span class="metric">~$${university.tuition.toLocaleString("en-US")}/год</span>`;
    node.querySelector(".grant-note").textContent = university.financialAidNote;
    node.querySelector(".policy-note").textContent = `Политика нужды: ${policyLabels[university.aidPolicy]}`;
    const source = node.querySelector(".aid-source");
    source.href = university.aidSource;
    source.title = `Официальные условия ${university.name}`;
    node.querySelector(".reason").textContent = reason(university, user);
    node.querySelector(".score-block strong").textContent = `${fitScore}%`;
    node.querySelector(".save-button").addEventListener("click", (event) => {
      const button = event.currentTarget;
      button.classList.toggle("is-saved");
      button.querySelector("svg").setAttribute("fill", button.classList.contains("is-saved") ? "currentColor" : "none");
    });
    resultsList.append(node);
  });
  lucide.createIcons();
}

gpa.addEventListener("input", () => { gpaOutput.value = Number(gpa.value).toFixed(1); });
form.addEventListener("submit", (event) => { event.preventDefault(); renderResults(); analytics.record("search"); document.querySelector(".results-area").scrollIntoView({ behavior: "smooth", block: "start" }); });
document.querySelector("#resetButton").addEventListener("click", () => { form.reset(); gpa.value = 3.6; gpaOutput.value = "3.6"; renderResults(); });

const mobileFilterToggle = document.querySelector("#mobileFilterToggle");
mobileFilterToggle.addEventListener("click", () => {
  const panel = document.querySelector(".profile-panel");
  const isCollapsed = panel.classList.toggle("is-collapsed");
  mobileFilterToggle.setAttribute("aria-expanded", String(!isCollapsed));
});

const themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", () => {
  const isDark = document.body.dataset.theme === "dark";
  document.body.dataset.theme = isDark ? "light" : "dark";
  themeButton.setAttribute("aria-label", isDark ? "Переключить тёмную тему" : "Переключить светлую тему");
  themeButton.setAttribute("title", isDark ? "Переключить тёмную тему" : "Переключить светлую тему");
  themeButton.innerHTML = `<i data-lucide="${isDark ? "moon" : "sun"}"></i>`;
  lucide.createIcons();
});

renderResults();
analytics.start();
