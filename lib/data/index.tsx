import { Scholarship, TScholarshipFilter } from '../types';
import { countries } from './countries';

export const navbarLinks = [
  {
    name: 'home',
    route: '/',
  },
  {
    name: 'search',
    route: '/search',
  },
  {
    name: 'about us',
    route: '/about-us',
  },
  {
    name: 'terms & policy',
    route: '/terms-and-policy',
  },
];

export const faculties = [
  // Science and Technology
  'Computer Science',
  'Engineering',
  'Information Technology',
  'Data Science',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Environmental Science',
  'Space and Aeronautics',

  // Health and Medical Sciences
  'Medicine',
  'Dentistry',
  'Pharmacy',
  'Nursing',
  'Public Health',
  'Biomedical Science',

  // Arts and Humanities
  'History',
  'Philosophy',
  'Literature',
  'Fine Arts',
  'Linguistics',
  'Religious Studies',
  'Cultural Studies',
  'Music',
  'Theatre Arts',

  // Business and Economics
  'Business Administration',
  'Accounting',
  'Finance',
  'Marketing',
  'Economics',
  'Human Resources Management',
  'Entrepreneurship',

  // Social Sciences
  'Psychology',
  'Sociology',
  'Political Science',
  'Anthropology',
  'Geography',
  'International Relations',
  'Education',

  // Law and Legal Studies
  'Law',
  'Criminology',
  'Legal Studies',

  // Agricultural and Environmental Sciences
  'Agriculture',
  'Horticulture',
  'Forestry',
  'Fisheries',
  'Animal Science',
  'Environmental Management',

  // Other Specialized Faculties
  'Architecture',
  'Urban Planning',
  'Media and Communication',
  'Hospitality and Tourism',
  'Sports Science',
];

export const scholarshipFilters: TScholarshipFilter = {
  faculty: {
    list: faculties,
    getQuery(faculty) {
      return `Available for ${faculty} faculty`;
    },
  },
  level: {
    list: ['High School', 'Undergraduates', 'Masters', 'Phd.'],
    getQuery(value) {
      return `Available to ${value} students in the U.S.`;
    },
  },
  nationality: {
    list: ['domestic', 'international'],
    getQuery(value) {
      return `Relevant for ${value} applicants.`;
    },
  },
  country: {
    list: countries,
    getQuery(value) {
      return `Eligible for students in ${value}`;
    },
  },
};

export const scholarships: Scholarship[] = [
  {
    school_name: 'University of Example',
    scholarship_name: 'Excellence Scholarship',
    organization: 'Example Foundation',
    eligibility_criteria: 'Must have a GPA of 3.5 or higher.',
    start_date: '2024-01-01',
    end_date: '2024-05-31',
    fully_funded: true,
    percentage_funded: 100,
    amount: 10000,
    eligible_falculties: ['Engineering', 'Science'],
    application_link: 'https://universityofexample.edu/scholarships/excellence',
  },
  {
    school_name: 'Example State University',
    scholarship_name: 'Community Service Award',
    organization: 'Community Service Org',
    eligibility_criteria: 'Minimum 50 hours of community service.',
    start_date: '2024-02-01',
    end_date: '2024-08-31',
    fully_funded: false,
    percentage_funded: 50,
    amount: 5000,
    eligible_falculties: ['Arts', 'Social Sciences'],
    application_link:
      'https://examplestateuniversity.edu/scholarships/community-service',
  },
  {
    school_name: 'Global Tech Institute',
    scholarship_name: 'Tech Innovators Grant',
    organization: 'Tech Innovators Group',
    eligibility_criteria: 'Must be enrolled in a tech-related field.',
    start_date: '2024-03-15',
    end_date: '2024-09-15',
    fully_funded: false,
    percentage_funded: 75,
    amount: 7500,
    eligible_falculties: [
      'Computer Science',
      'Information Technology',
      'Engineering',
    ],
    application_link:
      'https://globaltechinstitute.edu/scholarships/tech-innovators',
  },
  {
    school_name: 'Example University of Arts',
    scholarship_name: 'Arts Excellence Scholarship',
    organization: 'Arts Council',
    eligibility_criteria: 'Portfolio review required.',
    start_date: '2024-01-15',
    end_date: '2024-04-30',
    fully_funded: true,
    percentage_funded: 100,
    amount: 15000,
    eligible_falculties: ['Fine Arts', 'Performing Arts'],
    application_link:
      'https://exampleuniversityarts.edu/scholarships/arts-excellence',
  },
  {
    school_name: 'National University',
    scholarship_name: 'Diversity Scholarship',
    organization: 'Diversity Initiative',
    eligibility_criteria: 'Open to all underrepresented groups.',
    start_date: '2024-06-01',
    end_date: '2024-12-31',
    fully_funded: false,
    percentage_funded: 60,
    amount: 6000,
    eligible_falculties: ['All'],
    application_link: 'https://nationaluniversity.edu/scholarships/diversity',
  },
  {
    school_name: 'City College',
    scholarship_name: 'Sports Scholarship',
    organization: 'Athletic Department',
    eligibility_criteria: 'Must be a varsity athlete.',
    start_date: '2024-09-01',
    end_date: '2025-05-31',
    fully_funded: false,
    percentage_funded: 40,
    amount: 4000,
    eligible_falculties: ['Physical Education', 'Health Sciences'],
    application_link: 'https://citycollege.edu/scholarships/sports',
  },
  {
    school_name: 'Tech Valley University',
    scholarship_name: 'Innovative Minds Scholarship',
    organization: 'Tech Valley Foundation',
    eligibility_criteria: 'Must submit a project proposal.',
    start_date: '2024-04-01',
    end_date: '2024-08-15',
    fully_funded: true,
    percentage_funded: 100,
    amount: 12000,
    eligible_falculties: ['Engineering', 'Computer Science'],
    application_link:
      'https://techvalleyuniversity.edu/scholarships/innovative-minds',
  },
  {
    school_name: 'Riverside College',
    scholarship_name: 'Scholarship for All',
    organization: 'Riverside Community',
    eligibility_criteria: 'Open to all students.',
    start_date: '2024-01-15',
    end_date: '2024-07-30',
    fully_funded: false,
    percentage_funded: 25,
    amount: 2500,
    eligible_falculties: ['All'],
    application_link:
      'https://riversidecollege.edu/scholarships/scholarship-for-all',
  },
  {
    school_name: 'Example Medical University',
    scholarship_name: 'Healthcare Leaders Scholarship',
    organization: 'Health Foundation',
    eligibility_criteria: 'Must be pursuing a degree in healthcare.',
    start_date: '2024-05-01',
    end_date: '2024-11-30',
    fully_funded: false,
    percentage_funded: 50,
    amount: 8000,
    eligible_falculties: ['Health Sciences', 'Nursing'],
    application_link:
      'https://examplemedicaluniversity.edu/scholarships/healthcare-leaders',
  },
  {
    school_name: 'Hometown University',
    scholarship_name: 'Local Hero Scholarship',
    organization: 'Hometown Fund',
    eligibility_criteria: 'Must be a resident of Hometown.',
    start_date: '2024-02-15',
    end_date: '2024-09-01',
    fully_funded: true,
    percentage_funded: 100,
    amount: 10000,
    eligible_falculties: ['All'],
    application_link: 'https://hometownuniversity.edu/scholarships/local-hero',
  },
  {
    school_name: 'Oceanview College',
    scholarship_name: 'Marine Science Scholarship',
    organization: 'Ocean Conservation Society',
    eligibility_criteria: 'Must have a passion for marine science.',
    start_date: '2024-03-01',
    end_date: '2024-08-15',
    fully_funded: false,
    percentage_funded: 70,
    amount: 7000,
    eligible_falculties: ['Marine Biology', 'Environmental Science'],
    application_link:
      'https://oceanviewcollege.edu/scholarships/marine-science',
  },
  {
    school_name: 'Mountainview University',
    scholarship_name: 'Outdoor Adventures Scholarship',
    organization: 'Adventure Fund',
    eligibility_criteria: 'Must be involved in outdoor activities.',
    start_date: '2024-04-15',
    end_date: '2024-10-30',
    fully_funded: false,
    percentage_funded: 50,
    amount: 5000,
    eligible_falculties: ['Physical Education', 'Environmental Studies'],
    application_link:
      'https://mountainviewuniversity.edu/scholarships/outdoor-adventures',
  },
  {
    school_name: 'Creative Arts Institute',
    scholarship_name: 'Creativity in Arts Scholarship',
    organization: 'Creative Arts Society',
    eligibility_criteria: 'Must submit an art portfolio.',
    start_date: '2024-01-01',
    end_date: '2024-06-15',
    fully_funded: true,
    percentage_funded: 100,
    amount: 20000,
    eligible_falculties: ['Fine Arts', 'Design'],
    application_link:
      'https://creativeartsinstitute.edu/scholarships/creativity-in-arts',
  },
  {
    school_name: 'Business Leadership Academy',
    scholarship_name: 'Entrepreneurship Grant',
    organization: 'Business Innovators Network',
    eligibility_criteria: 'Must propose a business idea.',
    start_date: '2024-02-01',
    end_date: '2024-07-31',
    fully_funded: false,
    percentage_funded: 60,
    amount: 6000,
    eligible_falculties: ['Business', 'Economics'],
    application_link:
      'https://businessleadershipacademy.edu/scholarships/entrepreneurship',
  },
  {
    school_name: 'Cultural Heritage College',
    scholarship_name: 'Cultural Awareness Scholarship',
    organization: 'Cultural Heritage Organization',
    eligibility_criteria: 'Open to students promoting cultural awareness.',
    start_date: '2024-03-01',
    end_date: '2024-09-01',
    fully_funded: false,
    percentage_funded: 40,
    amount: 4000,
    eligible_falculties: ['Humanities', 'Social Sciences'],
    application_link:
      'https://culturalheritagecollege.edu/scholarships/cultural-awareness',
  },
  {
    school_name: 'Future Leaders Institute',
    scholarship_name: 'Youth Leadership Scholarship',
    organization: 'Youth Empowerment Group',
    eligibility_criteria: 'Must demonstrate leadership in school or community.',
    start_date: '2024-01-15',
    end_date: '2024-05-15',
    fully_funded: true,
    percentage_funded: 100,
    amount: 15000,
    eligible_falculties: ['All'],
    application_link: 'https://futureleadersinstitute.edu/scholarships/y',
  },
];
