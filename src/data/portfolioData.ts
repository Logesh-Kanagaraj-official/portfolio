
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tools: string[];
  image: string;
  github?: string;
  live?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  description: string;
  image?: string;
  color: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Car Sharing System",
    category: "Web Development",
    description:
      "A full-stack carpooling web app promoting green living by connecting drivers and riders. Features real-time route matching, CO₂ savings tracker, and seamless booking system.",
    tools: ["Java", "Spring Boot", "MySQL", "HTML5", "CSS3", "JavaScript"],
    image: "/images/project_car_sharing.png",
    github: "https://github.com/Logesh-Kanagaraj/Smart-Car-Sharing-System",
  },
  {
    id: 2,
    title: "Healthcare Appointment Organizer",
    category: "Web Development",
    description:
      "A smart healthcare management platform for scheduling appointments with doctors. Includes doctor profiles, calendar-based booking, patient dashboard, and appointment reminders.",
tools: ["Python", "Django", "HTML5", "CSS3", "JavaScript", "SQLite"],
    image: "/images/project_healthcare.png",
    github: "https://github.com/Logesh-Kanagaraj/Healthcare-Appointment-Organizer",
    live: "https://medicare-pro-yk85.onrender.com/",
  },
  {
    id: 3,
    title: "SIGN TONE — AI Sign Language Interpreter",
    category: "AI / Web Development",
    description:
      "An AI-powered real-time sign language detection and multilingual translation system. Uses computer vision and deep learning to recognize hand gestures and convert them to text/speech in multiple languages.",
    tools: ["Python", "Flask", "TensorFlow", "OpenCV", "JavaScript", "HTML5"],
    image: "/images/project_signtone.png",
    github: "https://github.com/Logesh-Kanagaraj/Sign-Tone-Sign-Language-Recognition-and-Multilingual-Interpreter-System",
  },
  {
    id: 4,
    title: "Threaded Dreams",
    category: "E-Commerce / Web Development",
    description:
      "A modern e-commerce fashion storefront with a sleek UI, product browsing, cart management, and seamless checkout flow. Built for a premium shopping experience with smooth animations and responsive design.",
    tools: ["React", "TypeScript", "Vite", "CSS3", "JavaScript"],
    image: "/images/project_threaded_dreams.png",
    live: "https://threadeddreams.netlify.app/",
  },
];

export const certifications: Certificate[] = [
  {
    id: 1,
    name: "Full Stack Web Development With Java",
    issuer: "Tap Academy",
    description: "Comprehensive Full Stack Web Development training covering Java, Spring Boot, React and MySQL.",
    color: "#c2a4ff",
  },
  {
    id: 2,
    name: "The Joy of Computing Using Python",
    issuer: "NPTEL (Elite)",
    description: "NPTEL Elite certification with 73% score in Python programming and computational thinking.",
    color: "#f59e0b",
  },
  {
    id: 3,
    name: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    description: "Infosys certification for foundational Python programming and problem-solving skills.",
    color: "#06b6d4",
  },
  {
    id: 4,
    name: "Paper Publication — Smart Car Sharing",
    issuer: "BTH Journal",
    description: "Research paper published in BTH Journal on Smart Car Sharing System for sustainable urban mobility.",
    color: "#10b981",
  },
  {
    id: 5,
    name: "Paper Presentation — ICSTEM'23",
    issuer: "ICSTEM Conference",
    description: "Presented research work at the International Conference on Science, Technology, Engineering & Management 2023.",
    color: "#f43f5e",
  },
  {
    id: 6,
    name: "Step Into RPA",
    issuer: "UiPath",
    description: "UiPath certification covering Robotic Process Automation fundamentals and workflow automation.",
    color: "#8b5cf6",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Accent Techno Soft",
    period: "Jul 2023 – Aug 2023",
    description:
      "Contributed to software development projects, gaining hands-on experience in full-stack development, debugging, and collaborative team workflows.",
  },
   {
    id: 2,
    role: "Full Stack Trainee",
    company: "TAP EdTech Private Limited",
    period: "Feb 2024 – Sep 2024",
    description:
      "Honed Java programming skills, JDBC, Spring Boot, Hibernate, MySQL and Front End Technologies through engaging tasks and assignments on the TAI Platform.",
  },
  { 
    id: 3,
    role: "Technical Associate",
    company: "Altruist Technologies",
    period: "Aug 2024 – Jan 2025",
    description:
      "Managed internet-based development, services, and seamless connectivity. Provided technical backend support, optimized operations, and contributed to enhancing service efficiency.",
  },
  {
    id: 4,
    role: "Software Developer",
    company: "Mitrahsoft Solutions Private Limited",
    period: "Present",
    description:
      "Working on diverse MERN-stack applications using React and Node.js, handling both frontend and backend development. Contributing to feature builds, API integrations, and overall performance enhancements.",
  },
];

export const education: EducationItem[] = [
   {
    id: 1,
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Kamatchi Amman Matriculation School",
    period: "2016 – 2017",
    grade: "91%",
  },

{
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Bishop Ubagaraswamy Hr. Sec. School",
    period: "2017 – 2019",
    grade: "71%",
  },
   {
    id: 3,
    degree: "B.Sc. Computer Technology",
    institution: "Kongu Arts and Science College",
    period: "2019 – 2022",
    grade: "80%",
  },
  
  {
    id: 4,
    degree: "Master of Computer Applications (MCA)",
    institution: "KIT – Kalaignarkarunanidhi Institute of Technology",
    period: "2022 – 2024",
    grade: "85%",
  }, 
];

export const skills: Skill[] = [
  { name: "JavaScript / TypeScript", percentage: 90, color: "#f7df1e" },
  { name: "React / Next.js", percentage: 88, color: "#61dafb" },
  { name: "Node.js / Express.js", percentage: 82, color: "#68a063" },
  { name: "Java / Spring Boot", percentage: 80, color: "#f89820" },
  { name: "Python", percentage: 75, color: "#3776ab" },
  { name: "MySQL / MongoDB", percentage: 78, color: "#4db33d" },
  { name: "HTML5 / CSS3", percentage: 95, color: "#e44d26" },
  { name: "Git / GitHub", percentage: 85, color: "#c2a4ff" },
];
