export const personalInfo = {
  name: "Yogita",
  headline: "Full-Stack (MERN) Developer | Java & DSA | Software Testing",
  tagline: "MERN-leaning full-stack developer bridging dynamic web applications with algorithmic precision and rigorous QA reliability.",
  email: "yogitasawant2004@gmail.com",
  github: "https://github.com/yogita-create",
  linkedin: "https://www.linkedin.com/in/yogita-sawant-webdev",
  resumeLink: "https://pdflink.to/6b435ed2/",
  location: "Maharashtra, India",
  status: "Open for Full-Time & Internship Opportunities",
  metrics: [
    { label: "Industry Experience", value: "1 Year", highlight: "Webmobi360 Intern" },
    { label: "Core Foundation", value: "MERN + Java", highlight: "Full Stack & DSA" },
    { label: "QA & Reliability", value: "5-10+ Bugs", highlight: "Identified & Resolved" },
    { label: "Current Education", value: "MCA '27", highlight: "Warana University" },
  ]
};

export const aboutData = {
  paragraphs: [
    "I am a MERN-leaning Full-Stack Developer with hands-on industry experience crafting high-performance, responsive web applications and reliable software solutions.",
    "Currently pursuing my Master of Computer Applications (MCA) at Warana University (2025–2027) after earning my BCA degree from Shivaji University (2025).",
    "I am actively deepening my expertise in Java, Data Structures & Algorithms (DSA), and Software Testing as complementary career tracks to write mathematically sound, bulletproof code.",
    "My engineering philosophy is firmly rooted in real project execution and comprehensive testing rather than superficial tutorials—ensuring high code quality, resilience, and user satisfaction."
  ],
  experience: {
    role: "Web Developer Intern",
    company: "Webmobi360 and B2B Pvt. Ltd",
    period: "July 2025 – July 2026",
    type: "Internship",
    description: "Contributed to production client web applications using modern JavaScript ecosystems. Implemented clean component hierarchies, responsive UI layouts, API integrations, and performed manual functional testing to maintain zero-regression deployments."
  }
};

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/40",
    accentColor: "emerald",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Primary" },
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Core" },
      { name: "HTML5 & CSS3", level: "Advanced", tag: "Markup" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "Responsive UI/UX", level: "Intermediate", tag: "Design" },
      { name: "Component Architecture", level: "Advanced", tag: "Patterns" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: "Server",
    gradient: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "group-hover:border-cyan-500/40",
    accentColor: "cyan",
    skills: [
      { name: "Node.js", level: "Intermediate", tag: "Runtime" },
      { name: "Express.js", level: "Intermediate", tag: "Framework" },
      { name: "MongoDB & Atlas", level: "Intermediate", tag: "NoSQL DB" },
      { name: "JWT & Google OAuth", level: "Intermediate", tag: "Auth / Security" },
      { name: "RESTful APIs", level: "Advanced", tag: "Architecture" },
      { name: "Mongoose ODM", level: "Intermediate", tag: "Data Modeling" }
    ]
  },
  {
    id: "core-cs",
    title: "Core CS & Algorithms",
    icon: "Code2",
    gradient: "from-indigo-500/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/40",
    accentColor: "indigo",
    skills: [
      { name: "Java", level: "Proficient", tag: "Language" },
      { name: "Data Structures & Algorithms", level: "Active Focus", tag: "DSA" },
      { name: "Object-Oriented Programming (OOP)", level: "Strong", tag: "Paradigm" },
      { name: "Problem Solving", level: "Analytical", tag: "Logic" },
      { name: "Database Management (DBMS)", level: "Foundational", tag: "Concepts" }
    ]
  },
  {
    id: "testing-qa",
    title: "Software Testing & QA",
    icon: "ShieldCheck",
    gradient: "from-purple-500/20 to-pink-500/10",
    borderGlow: "group-hover:border-purple-500/40",
    accentColor: "purple",
    skills: [
      { name: "Manual & Functional Testing", level: "Practiced", tag: "QA" },
      { name: "Bug Tracking & Root Cause Analysis", level: "Hands-on", tag: "Testing" },
      { name: "End-to-End Debugging", level: "Iterative", tag: "Diagnostics" },
      { name: "Edge Case & Regression Testing", level: "Rigorous", tag: "Validation" },
      { name: "QA Validation in Real Projects", level: "Battle-Tested", tag: "Cerebro QA" }
    ]
  }
];

export const projectsData = [
  {
    id: "cerebro",
    isFlagship: true,
    title: "Cerebro – RAG-Based PDF Q&A Platform",
    subtitle: "Flagship Full-Stack AI Application",
    description: "An intelligent retrieval-augmented generation (RAG) web platform that allows users to upload complex PDF documents and engage in context-aware, low-latency conversational queries.",
    testingHighlight: "QA & Testing Proof Point: Identified and eliminated 5–10 critical bugs across iterative QA testing rounds, including session token leaks, PDF chunk parsing boundary overflows, OAuth refresh race conditions, and memory leaks during high-volume document vectorization.",
    architecture: "Frontend hosted on Vercel with responsive Aurora Glass UI; Backend microservices deployed on Render connected to MongoDB Atlas and high-throughput Groq API.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Groq API",
      "JWT",
      "Google OAuth",
      "HTML & CSS",
      "Vercel",
      "Render"
    ],
    demoUrl: "https://cerebro-project.vercel.app/",
    githubUrl: "https://github.com/yogita-create/cerebro_project.git",
    badge: "Flagship MERN + AI Project"
  },
  {
    id: "aw",
    isFlagship: false,
    title: "Agent Workspace - A Project Management System",
    subtitle: "Flagship Full-Stack AI Application",
    description: "AI application designed as an agent-driven workspace for managing projects, tasks, and team collaboration in real time. Built with a modern MERN stack and integrated with Google's Gemini API for AI-assisted workflows, secured via JWT and Google OAuth for authentication.",
    testingHighlight: "Combined manual testing of task workflows and role-based access with automated tests to verify the AI agent correctly parses user instructions and creates tasks accurately.",
    architecture: "React frontend with a Node.js/Express REST API and MongoDB for data persistence, integrated with an AI agent that interprets natural language instructions and automatically creates tasks within the project management system.",
    techStack: [
     "React",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Gemini API",
      "JWT",
      "Google OAuth",
      "HTML & CSS",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/yogita-create/Agent-Workspace.git",
    badge: "Full Stack Tool"
  }
];

export const targetRoles = [
  "Frontend Developer",
  "React Developer",
  "MERN Stack Developer",
  "Fullstack Developer",
  "Junior Software Developer",
  "Software Testing"
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Warana University",
    period: "2025 – 2027",
    status: "Currently Pursuing",
    description: "Advanced study in Software Engineering, Modern Web Architectures, Database Administration, and Algorithmic Analysis."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shivaji University",
    period: "2022 – 2025",
    status: "Graduated (2025)",
    description: "Comprehensive foundation in Computer Science, Object-Oriented Java Programming, Web Technologies, and Relational Database Systems."
  }
];
