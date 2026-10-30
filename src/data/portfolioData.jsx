import React from 'react';

export const personalInfo = {
  name: "SENTHILKUMAR",
  nameFirst: "SENTHIL",
  nameLast: "KUMAR",
  location: "Salem, Tamil Nadu",
  email: "senthilson2003@gmail.com",
  phone: "+916385257541",
  phoneDisplay: "+91 63852 57541",
  targetRole: "Full Stack Developer + AI Engineering",
  heroDescription: "I build modern web and mobile applications with AI integration. Passionate about creating scalable, real-world solutions using modern technologies.",
  summary: "Full Stack Developer with experience in web application development, backend development, database management, mobile application development, and AI engineering. Skilled in building web applications using React.js, Node.js, Python, Java, Django, Spring Boot, and Laravel. Familiar with Flutter mobile application development, Large Language Model APIs, Retrieval-Augmented Generation, and local AI development using Ollama. Knowledge of payment gateway integration using Razorpay and Cashfree, along with version control, hosting, and application deployment. Interested in developing scalable software solutions and integrating AI capabilities into real-world applications.",
  resumeUrl: "/Senthilkumar_Resume.pdf",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
};

export const stats = [
  { value: "1+", label: "Years Experience", iconType: "code", color: "#6C4CCF" },
  { value: "11+", label: "Projects Completed", iconType: "users", color: "#6C4CCF" },
  { value: "2", label: "Degrees Completed", iconType: "graduation", color: "#6C4CCF" },
  { value: "100%", label: "Passion for Development", iconType: "heart", color: "#6C4CCF" }
];

export const heroFloatingCards = [
  {
    id: "ai-eng",
    title: "AI Engineering",
    subtitle: "LLM, RAG, AI Tools",
    iconType: "ai",
    position: "top-left",
    iconColor: "#6C4CCF",
    iconBg: "#F4F0FB"
  },
  {
    id: "full-stack",
    title: "Full Stack Development",
    subtitle: "Full Stack Solutions",
    iconType: "code",
    position: "mid-left",
    iconColor: "#6C4CCF",
    iconBg: "#F4F0FB"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    subtitle: "Flutter Applications",
    iconType: "mobile",
    position: "top-right",
    iconColor: "#6C4CCF",
    iconBg: "#F4F0FB"
  },
  {
    id: "cloud-dev",
    title: "Cloud & Deployment",
    subtitle: "AWS & DevOps",
    iconType: "cloud",
    position: "mid-right",
    iconColor: "#6C4CCF",
    iconBg: "#F4F0FB"
  }
];

export const expertiseCards = [
  {
    id: "web",
    title: "Web Development",
    description: "Modern, responsive and scalable web applications",
    icon: "globe",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using Flutter",
    icon: "smartphone",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  },
  {
    id: "ai",
    title: "AI Engineering",
    description: "LLM APIs, RAG, and local AI using Ollama",
    icon: "cpu",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Robust and secure APIs with Node.js, Django, Spring Boot",
    icon: "server",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  },
  {
    id: "payment",
    title: "Payment Integration",
    description: "Razorpay, Cashfree integration for secure transactions",
    icon: "credit-card",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  },
  {
    id: "cloud",
    title: "Cloud & Deployment",
    description: "AWS, Hostinger, GoDaddy deployment and hosting",
    icon: "cloud",
    color: "#6C4CCF",
    bg: "#F4F0FB"
  }
];

export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Mobile",
  "Database",
  "AI & Tools"
];

// Precisely 2 lines: Row 1 (11 skills) and Row 2 (11 skills)
export const skillsData = [
  // Line 1 (11 skills)
  { name: "React.js", category: "Frontend", color: "#61DAFB", iconName: "react", image: "/assets/skills/l-React.webp" },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", iconName: "tailwind", image: "/assets/skills/I-Tailwind Css.webp" },
  { name: "HTML5", category: "Frontend", color: "#E34F26", iconName: "html5", image: "/assets/skills/I-HTML5.webp" },
  { name: "CSS3", category: "Frontend", color: "#1572B6", iconName: "css3", image: "/assets/skills/I-CSS3.webp" },
  { name: "JavaScript", category: "Frontend", color: "#F7DF1E", iconName: "javascript", image: "/assets/skills/I-JavaScript.webp" },
  { name: "Python", category: "Backend", color: "#3776AB", iconName: "python", image: "/assets/skills/I-Python.webp" },
  { name: "Java", category: "Backend", color: "#007396", iconName: "java", image: "/assets/skills/I-Java.webp" },
  { name: "Node.js", category: "Backend", color: "#339933", iconName: "nodejs", image: "/assets/skills/I-Node.js.webp" },
  { name: "Django", category: "Backend", color: "#092E20", iconName: "django", image: "/assets/skills/I-Django (1).webp" },
  { name: "Spring Boot", category: "Backend", color: "#6DB33F", iconName: "springboot", image: "/assets/skills/I-Spring Boot.webp" },
  { name: "Laravel", category: "Backend", color: "#FF2D20", iconName: "laravel", image: "/assets/skills/I-Laravel.webp" },

  // Line 2 (11 skills)
  { name: "Flutter", category: "Mobile", color: "#02569B", iconName: "flutter", image: "/assets/skills/I-Flutter.webp" },
  { name: "MySQL", category: "Database", color: "#4479A1", iconName: "mysql", image: "/assets/skills/I-MySQL.webp" },
  { name: "PostgreSQL", category: "Database", color: "#4169E1", iconName: "postgresql", image: "/assets/skills/I-Postgrsq.webp" },
  { name: "MongoDB", category: "Database", color: "#47A248", iconName: "mongodb", image: "/assets/skills/I-mangodb.webp" },
  { name: "Open APIs", category: "AI & Tools", color: "#10A37F", iconName: "openai", image: "/assets/skills/I-chatgpt.webp" },
  { name: "RAG", category: "AI & Tools", color: "#4338CA", iconName: "rag", image: "/assets/skills/I-rag.webp" },
  { name: "Ollama", category: "AI & Tools", color: "#1F2937", iconName: "ollama", image: "/assets/skills/l-olama.webp" },
  { name: "Razorpay", category: "AI & Tools", color: "#02042B", iconName: "razorpay", image: "/assets/skills/l-razroay.webp" },
  { name: "Cashfree", category: "AI & Tools", color: "#FFB800", iconName: "cashfree", image: "/assets/skills/l-cashfree.webp" },
  { name: "AWS", category: "AI & Tools", color: "#FF9900", iconName: "aws", image: "/assets/skills/l-aws.webp" },
  { name: "GitHub", category: "AI & Tools", color: "#181717", iconName: "github", image: "/assets/skills/I-GitHub.webp" }
];

export const experienceData = [
  {
    step: "01",
    company: "Bitbyte Technologies",
    logo: "/assets/Bit Byte Logo.png",
    role: "Full Stack Developer",
    duration: "1 Year",
    description: "Contributed to full-stack web application development, worked with frontend and backend technologies and database systems, and used modern development tools and AI-assisted workflows."
  },
  {
    step: "02",
    company: "Infisq Innovation",
    logo: "/assets/infisq.jpeg",
    role: "Full Stack Developer Intern",
    duration: "3 Months",
    description: "Gained practical experience in full-stack application development, worked on frontend and backend development tasks, and participated in software development activities."
  },
  {
    step: "03",
    company: "RectoQ Software Solutions",
    logo: "/assets/rectoq_logo.jpg",
    role: "Software Development Intern",
    duration: "3 Months",
    description: "Gained practical experience in web development and exposure to debugging, testing, version control, and deployment workflows."
  }
];

export const projectCategories = [
  "All",
  "Web Applications",
  "Mobile Applications",
  "AI / Other"
];

export const projectsData = [
  {
    id: "athirai-gold",
    title: "Athirai Gold",
    subtitle: "E-commerce Software",
    category: "Web Applications",
    tags: ["Web App"],
    image: "/assets/project_athirai_gold.webp",
    description: "A luxury gold jewellery e-commerce platform built with robust catalog management, live market pricing synchronisation, secure checkout, and Razorpay payment gateway integration.",
    techStack: ["React.js", "Node.js", "MySQL", "Razorpay", "Tailwind CSS"],
    demoUrl: "https://athiraigold.com",
    githubUrl: "https://github.com"
  },
  {
    id: "athirai-digital-gold",
    title: "Athirai Digital Gold",
    subtitle: "Digital Gold Services",
    category: "Web Applications",
    tags: ["Web App"],
    image: "/assets/project_digital_gold.webp",
    description: "A digital gold investment application enabling customers to buy, sell, and accumulate 24K 99.9% pure digital gold in real time with integrated wallet management and secure payout gateways.",
    techStack: ["React.js", "Node.js", "PostgreSQL", "Cashfree", "REST APIs"],
    demoUrl: "https://digitalgold.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "athirai-hierarchy",
    title: "Athirai Hierarchy",
    subtitle: "Business Software",
    category: "Web Applications",
    tags: ["Web App"],
    image: "/assets/project_hierarchy.webp",
    description: "Enterprise hierarchical organizational management software facilitating multi-tier dealership structures, commission distribution tracking, and real-time administrative analytics.",
    techStack: ["React.js", "Django", "PostgreSQL", "Data Visualizations"],
    demoUrl: "https://hierarchy.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "task-management",
    title: "Task Management",
    subtitle: "Task Tracking Application",
    category: "Web Applications",
    tags: ["Web App"],
    image: "/assets/project_task.webp",
    description: "Agile task tracking and project workflow SaaS system featuring interactive Kanban boards, sprint velocity metrics, team collaboration comments, and role-based access control.",
    techStack: ["React.js", "Node.js", "MongoDB", "WebSockets"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "dream-country-visas",
    title: "Dream Country Visas",
    subtitle: "Visa Consultancy Software",
    category: "Web Applications",
    tags: ["Web App"],
    image: "/assets/project_visas.webp",
    description: "Comprehensive visa and immigration consultancy management platform featuring client onboarding, document verification workflows, appointment scheduling, and case tracking.",
    techStack: ["React.js", "Spring Boot", "MySQL", "AWS S3"],
    demoUrl: "https://dreamcountryvisas.com",
    githubUrl: "https://github.com"
  },
  {
    id: "hrms",
    title: "HRMS",
    subtitle: "Human Resource Management",
    category: "Web Applications",
    tags: ["Web App", "Mobile App"],
    image: "/assets/project_hrms.webp",
    description: "End-to-end Human Resource Management System handling biometric employee attendance, automated payroll calculations, leave management, and employee self-service mobile portal.",
    techStack: ["React.js", "Flutter", "Node.js", "MongoDB"],
    demoUrl: "https://hrms.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "sevagan-trust",
    title: "Sevagan Trust",
    subtitle: "Trust Management Software",
    category: "Web Applications",
    tags: ["Web App", "Mobile App"],
    image: "/assets/project_sevagan.webp",
    description: "Philanthropic trust and NGO management solution with donor contribution tracking, 80G tax receipt generation, welfare beneficiary records, and community outreach coordination.",
    techStack: ["React.js", "Flutter", "Laravel", "MySQL"],
    demoUrl: "https://sevagantrust.org",
    githubUrl: "https://github.com"
  },
  {
    id: "job-search-app",
    title: "Job Search App",
    subtitle: "Job Search Application",
    category: "Mobile Applications",
    tags: ["Mobile App"],
    image: "/assets/project_jobsearch.webp",
    description: "Cross-platform mobile application built with Flutter connecting job seekers with recruiters. Features intelligent candidate matching, resume parsing, and instant chat.",
    techStack: ["Flutter", "Dart", "Firebase", "Python LLM"],
    demoUrl: "https://jobsearch.example.com",
    githubUrl: "https://github.com"
  },
  {
    id: "super-market-app",
    title: "Super Market",
    subtitle: "Supermarket Mobile Application",
    category: "Mobile Applications",
    tags: ["Mobile App"],
    image: "/assets/project_super_market.webp",
    description: "A mobile application for supermarket shopping.",
    techStack: [],
    demoUrl: null,
    githubUrl: null
  },
  {
    id: "super-api",
    title: "Super API",
    subtitle: "AI Chatbot API",
    category: "AI / Other",
    tags: ["AI", "API"],
    image: "/assets/project_super_api.webp",
    description: "An AI chatbot API using Ollama and Retrieval-Augmented Generation (RAG) to answer questions using document context.",
    techStack: ["Ollama", "RAG"],
    demoUrl: null,
    githubUrl: null
  },
  {
    id: "dream-country-visas-chatbot",
    title: "Dream Country Visas Chatbot",
    subtitle: "AI Visa Assistant",
    category: "AI / Other",
    tags: ["AI", "Chatbot"],
    image: "/assets/project_visas_chatbot.webp",
    description: "A visa assistance chatbot using Ollama and Retrieval-Augmented Generation (RAG) to answer questions from visa documents.",
    techStack: ["Ollama", "RAG"],
    demoUrl: null,
    githubUrl: null
  }
];

export const educationData = [
  {
    degree: "MCA – Completed",
    title: "Master of Computer Applications",
    status: "Completed",
    period: "Postgraduate Degree",
    description: "Specialized in Software Engineering, Advanced Cloud Architectures, Distributed Databases, and Artificial Intelligence Systems.",
    highlights: ["Advanced Data Structures & Algorithms", "Full Stack Enterprise Architecture", "AI & Machine Learning Paradigms"]
  },
  {
    degree: "B.Sc. Computer Science – Completed",
    title: "Bachelor of Science in Computer Science",
    status: "Completed",
    period: "Undergraduate Degree",
    description: "Comprehensive foundation in computer science, computer networking, object-oriented software design, and database systems.",
    highlights: ["Object-Oriented Programming (Java/Python)", "Database Management Systems (RDBMS)", "Web Fundamentals & Operating Systems"]
  }
];
