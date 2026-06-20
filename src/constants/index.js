export const myProjects = [
  {
    id: 1,
    title: "Daily Expense Tracker",
    description:
      "A full-stack web application designed to track and manage personal expenses efficiently, featuring real-time updates and AI-driven invoice parsing.",
    subDescription: [
      "Built with React and Django REST Framework, utilizing RESTful APIs for efficient data communication.",
      "Integrates local AI models (Ollama LLM) and Tesseract OCR to automatically extract expense details from receipts and PDFs.",
      "Optimized with an SQLite database for fast read/write operations and real-time state synchronization.",
    ],
    href: "https://github.com/shivanshsenpai",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "Python", path: "/assets/logos/python.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
    ],
  },
  {
    id: 2,
    title: "Crowd Surveillance via Drones",
    description:
      "A real-time drone-based surveillance system utilizing AI to monitor crowd density and detect potential safety threats.",
    subDescription: [
      "Developed using Python, OpenCV, and deep learning algorithms (CNN) for real-time video analytics.",
      "Implemented intelligent detection modules for weapon and fire hazards to enhance crowd safety.",
      "Optimized video processing pipelines with frame-skipping techniques to achieve low-latency performance.",
    ],
    href: "https://github.com/shivanshsenpai",
    logo: "",
    image: "/assets/projects/d.jpg.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "OpenCV", path: "/assets/logos/opencv.svg" },
    ],
  },
  {
    id: 3,
    title: "Gym Management System",
    description:
      "A responsive gym management and attendance tracking platform built to automate member check-ins and fees renewal.",
    subDescription: [
      "Developed a responsive React web interface integrated with Google Maps API for location tracking.",
      "Utilized Google Sheets as a live database via N8N automation workflow for real-time data sync.",
      "Designed highly reusable, modular components to maintain consistent styling and scale seamlessly.",
    ],
    href: "https://github.com/shivanshsenpai",
    logo: "",
    image: "/assets/projects/b.jpg.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 4, name: "CSS3", path: "/assets/logos/css3.svg" },
    ],
  },
  {
    id: 4,
    title: "Patient Management Dashboard System",
    description:
      "An automated internal dashboard built on Microsoft Power Platform to streamline doctor assignments and patient tracking.",
    subDescription: [
      "Built with Microsoft Power Apps and SharePoint for a centralized database and secure data access.",
      "Automated clinical workflows and doctor-patient mapping using Power Automate, reducing manual delays.",
      "Significantly enhanced hospital operational efficiency through process automation and tracking dashboards.",
    ],
    href: "https://github.com/shivanshsenpai",
    logo: "",
    image: "/assets/projects/c.jpg.png",
    tags: [
      { id: 1, name: "Power Apps", path: "/assets/logos/microsoft.svg" },
      { id: 2, name: "SharePoint", path: "/assets/logos/microsoft.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
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
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
