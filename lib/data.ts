export const provinces = [
  { id: 1, name: 'Kabul', code: 'KAB', students: 2500 },
  { id: 2, name: 'Herat', code: 'HER', students: 1800 },
  { id: 3, name: 'Kandahar', code: 'KAN', students: 1600 },
  { id: 4, name: 'Mazar-e-Sharif', code: 'MAZ', students: 1400 },
  { id: 5, name: 'Balkh', code: 'BAL', students: 1200 },
  { id: 6, name: 'Jalalabad', code: 'JAL', students: 1000 },
  { id: 7, name: 'Ghazni', code: 'GHA', students: 900 },
  { id: 8, name: 'Kunduz', code: 'KUN', students: 800 },
  { id: 9, name: 'Paktia', code: 'PAT', students: 700 },
  { id: 10, name: 'Nangarhar', code: 'NAN', students: 1100 }
];

export const courses = [
  {
    id: 1,
    title: 'Programming Fundamentals',
    description: 'Learn the basics of programming with Python and JavaScript',
    duration: '8 weeks',
    category: 'cs',
    language: 'Dari',
    level: 'beginner',
    instructor: 'Dr. Sultana Rahimi',
    students: 1250
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Build responsive websites using HTML, CSS, and JavaScript',
    duration: '12 weeks',
    category: 'cs',
    language: 'English',
    level: 'intermediate',
    instructor: 'Prof. Layla Karimi',
    students: 980
  },
  {
    id: 3,
    title: 'English Language',
    description: 'Improve your English speaking, reading, and writing skills',
    duration: '10 weeks',
    category: 'language',
    language: 'Dari',
    level: 'beginner',
    instructor: 'Ms. Freshta Akbari',
    students: 1420
  },
  {
    id: 4,
    title: 'Mobile Development',
    description: 'Create mobile applications using React Native',
    duration: '14 weeks',
    category: 'cs',
    language: 'English',
    level: 'intermediate',
    instructor: 'Dr. Zahra Mohammadi',
    students: 750
  },
  {
    id: 5,
    title: 'Data Science',
    description: 'Analyze data using Python and machine learning techniques',
    duration: '16 weeks',
    category: 'cs',
    language: 'English',
    level: 'advanced',
    instructor: 'Dr. Sultana Rahimi',
    students: 680
  },
  {
    id: 6,
    title: 'French Language',
    description: 'Learn French for professional and personal development',
    duration: '12 weeks',
    category: 'language',
    language: 'French',
    level: 'beginner',
    instructor: 'Ms. Freshta Akbari',
    students: 540
  },
  {
    id: 7,
    title: 'Cybersecurity',
    description: 'Protect digital systems and data from cyber threats',
    duration: '10 weeks',
    category: 'cs',
    language: 'English',
    level: 'advanced',
    instructor: 'Dr. Zahra Mohammadi',
    students: 420
  },
  {
    id: 8,
    title: 'Pashto Language',
    description: 'Enhance your Pashto language skills for professional use',
    duration: '8 weeks',
    category: 'language',
    language: 'Pashto',
    level: 'intermediate',
    instructor: 'Prof. Layla Karimi',
    students: 380
  }
];

export const graduates = [
  {
    id: 1,
    name: 'Fatima Akbari',
    province: 'Kabul',
    job: 'Software Engineer',
    company: 'Tech Solutions Inc.',
    testimonial: 'The programming course opened up new career opportunities for me. I now work for a tech company in Kabul.',
    rating: 5,
    course: 'Programming Fundamentals',
    graduationYear: 2022
  },
  {
    id: 2,
    name: 'Zainab Mohammadi',
    province: 'Herat',
    job: 'Data Analyst',
    company: 'Data Insights Co.',
    testimonial: 'The data science course helped me develop valuable analytical skills that I now use in my daily work.',
    rating: 4,
    course: 'Data Science',
    graduationYear: 2023
  },
  {
    id: 3,
    name: 'Maryam Karimi',
    province: 'Kandahar',
    job: 'English Teacher',
    company: 'International School',
    testimonial: 'The English language course improved my communication skills and helped me secure a teaching position.',
    rating: 5,
    course: 'English Language',
    graduationYear: 2022
  },
  {
    id: 4,
    name: 'Amina Sadiqi',
    province: 'Mazar-e-Sharif',
    job: 'Mobile Developer',
    company: 'App Innovations',
    testimonial: 'The mobile development course was exactly what I needed to transition into app development.',
    rating: 5,
    course: 'Mobile Development',
    graduationYear: 2023
  },
  {
    id: 5,
    name: 'Hawa Nazari',
    province: 'Balkh',
    job: 'Freelance Translator',
    company: 'Self-employed',
    testimonial: 'Learning French through this academy allowed me to start my own translation business.',
    rating: 4,
    course: 'French Language',
    graduationYear: 2021
  },
  {
    id: 6,
    name: 'Parwana Ahmadi',
    province: 'Jalalabad',
    job: 'Cybersecurity Specialist',
    company: 'Secure Networks',
    testimonial: 'The cybersecurity course gave me the knowledge to protect important systems in my organization.',
    rating: 5,
    course: 'Cybersecurity',
    graduationYear: 2023
  }
];

export const teachers = [
  {
    id: 1,
    name: 'Dr. Sultana Rahimi',
    qualification: 'PhD in Computer Science',
    experience: '10 years teaching experience',
    specialization: ['Programming', 'Web Development', 'Data Science'],
    bio: 'Expert in programming and data science with extensive industry experience.'
  },
  {
    id: 2,
    name: 'Prof. Layla Karimi',
    qualification: 'Masters in English Literature',
    experience: '8 years teaching experience',
    specialization: ['English Language', 'French Language', 'Pashto Language'],
    bio: 'Language specialist with focus on multilingual education.'
  },
  {
    id: 3,
    name: 'Dr. Zahra Mohammadi',
    qualification: 'PhD in Data Science',
    experience: '7 years industry experience',
    specialization: ['Data Science', 'Cybersecurity', 'Machine Learning'],
    bio: 'Data science and cybersecurity expert with practical industry knowledge.'
  },
  {
    id: 4,
    name: 'Ms. Freshta Akbari',
    qualification: 'Masters in Mobile Development',
    experience: '5 years development experience',
    specialization: ['Mobile Development', 'Programming', 'UI/UX Design'],
    bio: 'Mobile development specialist with a passion for creating user-friendly applications.'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Fatima Akbari',
    province: 'Kabul',
    text: 'The programming course opened up new career opportunities for me. I now work for a tech company in Kabul.',
    rating: 5
  },
  {
    id: 2,
    name: 'Zainab Mohammadi',
    province: 'Herat',
    text: 'The data science course helped me develop valuable analytical skills that I now use in my daily work.',
    rating: 4
  },
  {
    id: 3,
    name: 'Maryam Karimi',
    province: 'Kandahar',
    text: 'The English language course improved my communication skills and helped me secure a teaching position.',
    rating: 5
  },
  {
    id: 4,
    name: 'Amina Sadiqi',
    province: 'Mazar-e-Sharif',
    text: 'The mobile development course was exactly what I needed to transition into app development.',
    rating: 5
  }
];