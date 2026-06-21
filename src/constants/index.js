export const myProjects = [
  {
    id: 1,
    title: "Daily Expense Tracker",
    description:
      "A deployed full-stack web application for automated daily expense tracking and management, featuring real-time analytics and AI invoice parsing.",
    subDescription: [
      "Developed a responsive frontend with React and a robust backend in Django REST Framework to enable instant budget calculations.",
      "Integrates local LLMs (Ollama) and Tesseract OCR to automatically scan and parse transaction details from invoices/receipts.",
      "Actively deployed and working in the real world to help users automate personal finance audits with sub-second backend response times.",
    ],
    href: "https://daily-expense-tracker-migi-shivansh-shivanshsenpais-projects.vercel.app/",
    logo: "",
    image: "/assets/projects/expense-tracker.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 2,
    title: "Crowd Surveillance via Drones (Patent Published)",
    description:
      "An AI-powered real-time drone surveillance platform with a published research patent, designed to monitor crowd density and detect safety hazards.",
    subDescription: [
      "Utilizes custom CNN models and OpenCV pipelines for low-latency live video threat detection.",
      "Published research patent covering novel drone-based threat and fire detection methodologies for crowd safety.",
      "Designed with an interactive web dashboard showcasing real-time detection timelines, charts, and metrics.",
    ],
    href: "https://github.com/shivanshsenpai",
    logo: "",
    image: "/assets/projects/drone-watch.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "OpenCV", path: "/assets/logos/opencv.svg" },
    ],
  },
  {
    id: 3,
    title: "Fitness One - Gym Management",
    description:
      "A responsive gym management and attendance tracking platform built to automate member check-ins and fees renewal.",
    subDescription: [
      "Developed a responsive React web interface integrated with Google Maps API for location tracking.",
      "Utilized Google Sheets as a live database via N8N automation workflow for real-time data sync.",
      "Designed highly reusable, modular components to maintain consistent styling and scale seamlessly.",
    ],
    href: "https://github.com/shivanshsenpai/Fitness_One",
    logo: "",
    image: "/assets/projects/fitness-one-captured.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 4, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
  {
    id: 4,
    title: "MFitness Gym Website",
    description:
      "A production-ready fitness showcase and member onboarding web app actively used in the real world by local fitness centers.",
    subDescription: [
      "Developed a modern, high-performance interface with React.js and CSS3/Tailwind for a premium, fast single-page app experience.",
      "Deployed and actively utilized in production by two prominent physical gym locations: MFitness Gym and Astra Gym.",
      "Includes interactive membership plans, workout schedules, trainers showcase, and lead-generating client forms.",
    ],
    href: "https://mfitness-uk08.vercel.app/#/",
    logo: "",
    image: "/assets/projects/mfitness.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 4, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/918449434741",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shivansh-senpai/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/shivansh_senpai/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Automation System Developer",
    job: "55Carat (Google Apps Script / JS)",
    date: "01/2026 – Present",
    contents: [
      "Developed a configurable data processing system using Google Apps Script to identify incomplete records and sync updates across datasets.",
      "Implemented efficient data handling and automated workflows with modular design and a custom UI, improving performance, accuracy, and reducing manual effort.",
      "Collaborated closely with sales and customer support teams to gather requirements and refine functionality.",
    ],
  },
  {
    title: "Software Developer Trainee",
    job: "Penthara Technologies",
    date: "11/2025 – 01/2026",
    contents: [
      "Developed and optimized responsive web interfaces using React.js, improving user experience and performance across multiple devices.",
      "Collaborated with senior developers on Microsoft 365 projects and Power Apps for Businesses, gaining hands-on experience in frontend development and cloud-based solutions.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    job: "Prodesk IT",
    date: "06/2025 – 07/2025",
    contents: [
      "Built responsive, interactive web components using HTML, CSS, JavaScript, and React basics.",
      "Collaborated with designers and backend developers for full-stack project delivery.",
      "Practiced agile development, teamwork, and participated in sprint meetings.",
    ],
  },
  {
    title: "Campus Ambassador",
    job: "Hunch (Social Media App)",
    date: "05/2024 – 07/2024",
    contents: [
      "Promoted the social media application across campus events and online student communities.",
      "Learned and practiced the art of business communication, marketing, and persuasive speech.",
    ],
  },
];

export const reviews = [
  {
    name: "MFitness Gym (Manager)",
    username: "@mfitness_gym",
    body: "Implementing this website helped us double our online member queries! The sleek design perfectly captures our premium gym experience.",
    img: "https://robohash.org/mfitness",
  },
  {
    name: "Astra Gym (Founder)",
    username: "@astra_gym",
    body: "The interactive plans and responsive layout have completely modernized our web presence. Onboarding new members has never been easier.",
    img: "https://robohash.org/astragym",
  },
  {
    name: "Daily Expense User",
    username: "@expense_user",
    body: "The AI invoice extraction works beautifully. The app provides a smooth, production-grade tracking experience on mobile.",
    img: "https://robohash.org/expenseuser",
  },
  {
    name: "Crowd Safety Analyst",
    username: "@surveillance_pro",
    body: "Low-latency frame processing and accurate threat alerts makes this drone platform a robust, practical solution for real-world monitoring.",
    img: "https://robohash.org/dronepro",
  },
];
