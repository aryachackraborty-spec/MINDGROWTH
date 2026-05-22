/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Course, Branch, Testimonial, Facility } from "./types";

export const BRAND_NAME = "MindGrowth Academy";
export const BRAND_TAGLINE = "Smart Learning • Competitive Excellence • Future Ready Students";

export const COURSES: Course[] = [
  {
    id: "v-xii-all",
    title: "Classes V–XII Foundation",
    tagline: "Total Syllabus & Subject Mastery for School Boards",
    category: "boards",
    duration: "Year-long Comprehensive Program",
    boardText: "ICSE / CBSE / West Bengal Board",
    description: "Deep concept-oriented coaching covering all school academic subjects. Designed specifically to strengthen fundamental concepts, improve writing capabilities, and excel in board examinations with personalized care.",
    features: [
      "All academic subjects covered under one roof",
      "Special emphasis on Mathematics, Science, and English",
      "Regular board-aligned mock tests & answer sheet correction",
      "Doubt clearing sessions with personal mentors"
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English Literature & Grammar", "Social Sciences", "Vernacular (Bengali/Hindi)"],
    glowColor: "from-cyan-500 to-blue-600",
    iconName: "Atom"
  },
  {
    id: "jee-mains",
    title: "IIT-JEE MAINS Preparation",
    tagline: "Cracking India’s Toughest Engineering Entrance Exam",
    category: "competitive",
    duration: "1 & 2 Years Intensive Classroom Programs",
    boardText: "National Engineering Entrance Exam",
    description: "Rigorous training focused on precision, speed, and strategic elimination of errors. Features high-quality study materials, topic-wise assessments, and extensive computer-based tests simulating the real JEE ecosystem.",
    features: [
      "Rigorous problem-solving drills with shortcut tips",
      "Computer-Based Testing (CBT) on actual NTA exam patterns",
      "Physics, Chemistry, and Mathematics integrated schedule",
      "Result analysis using digital tracking matrices"
    ],
    subjects: ["Advanced Physics", "Analytical Chemistry", "Calculus & Algebra (JEE Level)", "Numerical Reasoning"],
    glowColor: "from-blue-500 to-purple-600",
    iconName: "Binary"
  },
  {
    id: "jee-advanced",
    title: "IIT-JEE ADVANCED Preparation",
    tagline: "Aiming for India’s Elite Engineering Institutions",
    category: "competitive",
    duration: "Supercharged Advanced Batch",
    boardText: "IIT Admission Gateway",
    description: "Specially tuned for students aiming for the top 500 IIT ranks. Leverages complex multi-conceptual problems, research-backed pedagogy, personal mentorship from national-caliber educators, and extreme revision sprints.",
    features: [
      "Solving multi-concept cross-linked problems",
      "Elite ranker batches with highly focused student peers",
      "Intensive 1-on-1 subject profiling & weakness analysis",
      "Advanced test series with immediate behavioral feedback"
    ],
    subjects: ["Multi-concept Physics Problems", "Inorganic & Organic Synthesis", "Complex Coordinate Geometry", "Thermodynamics & Kinetics"],
    glowColor: "from-purple-500 to-pink-500",
    iconName: "Rocket"
  },
  {
    id: "wbjee",
    title: "WBJEE Prep Program",
    tagline: "Secure Your Seat in Jadavpur & West Bengal’s Top Colleges",
    category: "competitive",
    duration: "1 Year Dedicated Target Program",
    boardText: "West Bengal Joint Entrance",
    description: "Specifically structured according to WBJEE standards. Focused speed-drills, state-rank assessment, shortcut mathematical methodologies, and dedicated modules matching local state colleges expectations.",
    features: [
      "Extensive WBJEE-centered numerical speed sprints",
      "Jadavpur University alumnus mentoring masterclasses",
      "Speed assessment strategies and time management metrics",
      "10 years solved paper mock evaluations under timed pressure"
    ],
    subjects: ["WBJEE Mock Sprints", "Calculus Boosters", "Physical Chemistry Dynamics", "Applied Mechanics"],
    glowColor: "from-emerald-400 to-cyan-500",
    iconName: "Cpu"
  },
  {
    id: "neet",
    title: "NEET Medical Preparation",
    tagline: "Empowering Next-Gen Healthcare Giants",
    category: "competitive",
    duration: "1 & 2 Years Comprehensive Medical Programs",
    boardText: "National Medical Entrance Exam",
    description: "The gold standard for medical aspirants in Kolkata. Structured around detailed NCERT deep-dives, visual biology breakdowns, rigorous organic chemistry mechanisms, and timed physics conceptual problem-solving formulas.",
    features: [
      "Exhaustive NCERT-centered study and diagnostic tools",
      "Timed mock tests aligned to current NMC medical paper patterns",
      "High-resolution 3D medical visual aids & concept triggers",
      "Detailed analysis maps tracking weak syllabus sections"
    ],
    subjects: ["Human Physiology & Genetics", "Plant Morphology & Cell Biology", "Organic Mechanisms", "Modern Physics & Optics"],
    glowColor: "from-rose-500 to-purple-600",
    iconName: "Heart"
  },
  {
    id: "spoken-english",
    title: "Spoken English & Communication",
    tagline: "Gain Global Confidence & Linguistic Prowess",
    category: "languages",
    duration: "3 & 6 Months Executive & Student Modules",
    boardText: "Fluency & Soft Skills Mastery",
    description: "Acquire fluent verbal skills, premium personality grooming, and executive presentation capabilities. Especially useful for Bengali-medium students transitioning into competitive corporate or national university environments.",
    features: [
      "Interactive group discussions and stage-fear relief therapies",
      "Corporate standard accent training and speech refinement",
      "Linguistic confidence-building drills and business writing",
      "Individual audio accent reviews and mock interview rehearsals"
    ],
    subjects: ["Fluent Conversational Grammar", "Public Speaking Exercises", "Corporate Writing & Body Language", "Accent Reduction Modules"],
    glowColor: "from-amber-400 to-orange-500",
    iconName: "Languages"
  }
];

export const BRANCHES: Branch[] = [
  {
    name: "Naktala Branch",
    slug: "naktala",
    address: "Shyama Apartment, 3rd Floor, 2/91B, Naktala, Kolkata – 700047",
    landmark: "Opp. Bazaar Kolkata",
    email: "academymindgrowth@gmail.com",
    phone: "+91 80516 80816",
    whatsapp: "918051680816",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.417387123985!2d88.36838387530364!3d22.488506179551403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270bdf606be95%3A0xe67ef86a4e212f36!2sNaktala%2C%20Kolkata%2C%20West%20Bengal%20700047!5e0!3m2!1sen!2sin!4v1715693000000!5m2!1sen!2sin",
    features: ["Opposite Bazaar Kolkata", "Near Naktala Metro Station", "Smart Digital Classroom Enabled", "Premium Self-Study Zones"]
  },
  {
    name: "Sonarpur Branch",
    slug: "sonarpur",
    address: "82, Neel Pushpa Complex, 2nd Floor, Sonarpur Bazar, Kolkata – 700150",
    landmark: "Sonarpur Bazar",
    email: "academymindgrowth@gmail.com",
    phone: "+91 80099 00981",
    whatsapp: "918009900981",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1844.032230623!2d88.4283121!3d22.4419208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02720d2ecbdf9d%3A0x1d61858c8dbcc6d8!2sSonarpur%20Bazar%2C%20Kolkata%20700150!5e0!3m2!1sen!2sin!4v1715694000000!5m2!1sen!2sin",
    features: ["Heart of Sonarpur Bazar", "2 Mins from Sonarpur Junction Station", "Equipped Computer-Based Test (CBT) Lab", "Fully AC Diagnostic Environment"]
  },
  {
    name: "Canning Branch",
    slug: "canning",
    address: "Asha Complex, Sanjay Pally, Canning, South 24 Parganas",
    landmark: "Opp. Bandhumahul Club",
    email: "mindgrowthacademy00@gmail.com",
    phone: "+91 90739 79837",
    whatsapp: "919073979837",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.627387123985!2d88.6631838!3d22.3115061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0212a4f605fa8d%3A0x6b4ef86b4e212e36!2sCanning%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1715695000000!5m2!1sen!2sin",
    features: ["Opposite Bandhumahul Club", "Spacious Hybrid Learning Infrastructure", "Comprehensive Regional Language Support", "Library with Vast Offline Textbooks Library"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    studentName: "Aniket Sen",
    parentName: "Siddharth Sen",
    classNameOrTarget: "IIT-JEE Advanced Ranker",
    textEn: "The Mock CBT platform at MindGrowth is exceptional. It fully simulates the NTA computer testing feel, which completely eliminated my exam nerves on JEE day. The physics concept depth taught by the faculty is unmatched.",
    textBn: "মাইডগ্রোথের মক সিবিটি প্ল্যাটফর্ম অসাধারণ। এটা পুরোপুরি আসল পরীক্ষা দেওয়ার অনুভূতি দেয় যা আমার পরীক্ষার ভয় সম্পূর্ণ দূর করেছিল। ফিজিক্সের কনসেপ্ট বোঝানোর ধরণ অপূর্ব।",
    rating: 5,
    tags: ["JEE Advanced", "Naktala Branch"],
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "t2",
    studentName: "Rimpa Pramanik",
    parentName: "Gopal Pramanik",
    classNameOrTarget: "Class XII WB Board Ranker",
    textEn: "My exam percentage rose from 72% in Class X to 94.2% in XII Board. The remedial batches, study environment, and absolute clarity on biology diagrams saved my scores. Teachers never lost patience with me.",
    textBn: "আমার মেয়ের মাধ্যমিকের নম্বর থেকে উচ্চমাধ্যমিকে দারুণ উন্নতি হয়েছে। পড়াশুনার অসাধারণ পরিবেশ এবং শিক্ষকদের ধৈর্য সত্যিই প্রশংসনীয়।",
    rating: 5,
    tags: ["Class XII Board", "Canning Branch"],
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "t3",
    studentName: "Sourish Mukherjee",
    parentName: "Subrata Mukherjee",
    classNameOrTarget: "NEET Top Ranker",
    textEn: "MindGrowth provides the highest standard of academic coaching in Kolkata for medical aspirants. OMR evaluations and immediate digital result spreadsheets let us correct errors within hours.",
    textBn: "আমার ছেলের confidence অনেক improve করেছে। এখানে মেডিকেল পরীক্ষার প্রস্তুতি নেওয়ার জন্য অত্যন্ত উন্নত মানের টেকনোলজি আর মেন্টরশিপ দেওয়া হয়।",
    rating: 5,
    tags: ["NEET Prep", "Sonarpur Branch"],
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "t4",
    studentName: "Sohini Roy",
    parentName: "Meenakshi Roy",
    classNameOrTarget: "Class IX & Spoken English",
    textEn: "I joined MindGrowth primarily for English and Science foundation focus. Not only did my science ranks jump top of the syllabus, but my confidence in public speaking and English conversation blossomed amazingly.",
    textBn: "সায়েন্স ফাউন্ডেশনের সাথে সাথে আমার স্পোকেন ইংলিশের জড়তা কেটেছে সম্পূর্ণভাবে। এখন আমি সবার সামনে সহজে বলতে পারি।",
    rating: 5,
    tags: ["Spoken English", "Naktala Branch"],
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "t5",
    studentName: "Debtanu Hazra",
    parentName: "Mihir Hazra",
    classNameOrTarget: "WBJEE Aspirant",
    textEn: "The short-cut computation strategies for WBJEE math exams are absolute gold! MindGrowth Academy teaches you how to crack a question in 30 seconds rather than doing complex 4-pages derivations.",
    textBn: "ডব্লিউবিজেইই ম্যাথের অত্যন্ত প্রয়োজনীয় শর্টকাট ট্রিক্স এখানকার শিক্ষকরা শিখিয়েছেন, যার সুবাদে টাইমে সব সলভ করা সম্ভব হয়েছে।",
    rating: 5,
    tags: ["WBJEE Prep", "Sonarpur Branch"],
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    featured: false
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "smart-classroom",
    title: "Smart Classroom Tech",
    description: "Equipped with interactive audio-visual displays for 3D chemical structures, biological processes, and 3D geometry rendering.",
    iconName: "Presentation",
    badge: "Futuristic"
  },
  {
    id: "online-exam-platform",
    title: "Online Exam Platform",
    description: "Digital web assessments that give immediate results, error classifications, and comparative percentile tables.",
    iconName: "Monitor"
  },
  {
    id: "remedial-classes",
    title: "Remedial Help Classes",
    description: "Exclusive slow-paced tutoring classes for weaker areas, making sure no student is let down by high pace teaching styles.",
    iconName: "FlameKindling",
    badge: "Highly Trusted"
  },
  {
    id: "mock-tests",
    title: "Regular Mock Assessments",
    description: "Weekly mock tests structured for competitive levels to evaluate continuous improvement and exam strategy mapping.",
    iconName: "FileText"
  },
  {
    id: "student-evaluation",
    title: "Peer-to-Peer Evaluation",
    description: "Supervised conceptual debates allowing students to review peer concepts, strengthening self-evaluation skills.",
    iconName: "Users"
  },
  {
    id: "ai-monitoring",
    title: "AI Student Tracking",
    description: "Advanced intelligence tracking student conceptual health, mock histories, homework progress, and attendance alerts.",
    iconName: "Cpu",
    badge: "AI Powered"
  },
  {
    id: "cbt-platform",
    title: "NTA Custom CBT Platform",
    description: "Exact computer laboratory replica environment for IIT-JEE/NEET candidates to ease digital software navigation.",
    iconName: "Laptop",
    badge: "High Conversion"
  },
  {
    id: "result-analysis",
    title: "Instant Diagnostic Analytics",
    description: "Detailed performance reports sent directly to parents on WhatsApp highlighting chapter mastery and weak nodes.",
    iconName: "TrendingUp"
  },
  {
    id: "library-facility",
    title: "Advanced Library Facility",
    description: "Access to prestigious reference textbooks (Irodov, HC Verma, Morrison Boyd) for offline reference without extra charges.",
    iconName: "BookOpen"
  },
  {
    id: "self-study",
    title: "Self-Study Support Comfort Zones",
    description: "Ergonomic workspace cabins configured specifically for self-study before or after regular tuition hours.",
    iconName: "Coffee"
  },
  {
    id: "ac-classrooms",
    title: "Fully Climatized AC Rooms",
    description: "Silent air-conditioned zones providing complete physical comforting focus during the humid Kolkata summer season.",
    iconName: "CheckCircle"
  },
  {
    id: "omr-evaluation",
    title: "High-Speed OMR Evaluation",
    description: "Scanning of bubble sheets based on actual national criteria to train JEE/NEET candidates strictly on negative markings.",
    iconName: "ShieldAlert"
  },
  {
    id: "student-counselling",
    title: "Psychological & Motivation Counselling",
    description: "Direct mentorship sessions with psychological experts to relieve academic burnout, depression, and score anxieties.",
    iconName: "HeartHandshake",
    badge: "Empathetic Care"
  },
  {
    id: "misc-support",
    title: "Miscellaneous Academic Support",
    description: "Help with state scholarships submissions, school projects review, lab manual structures, and board form filings.",
    iconName: "Award"
  }
];
