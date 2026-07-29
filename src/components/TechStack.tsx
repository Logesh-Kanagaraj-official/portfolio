import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/TechStack.css";

gsap.registerPlugin(ScrollTrigger);

// Pyramid shape: widest at top, narrowing to bottom (like the reference image)
const techRows = [
  // Row 1 (8)
  [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
    { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
  ],

  // Row 2 (7)
  [
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    { name: "GSAP", icon: "https://cdn.simpleicons.org/greensock/88CE02" },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "REST API",
      icon: "https://cdn.simpleicons.org/openapiinitiative/6BA539",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    { name: "pgvector", icon: "https://cdn.simpleicons.org/postgresql/336791" },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ],

  // Row 3 (6)
  [
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Vite",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],

  // Row 4 (5)
  [
    { name: "LLMs", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "RAG", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "AI Agents", icon: "https://cdn.simpleicons.org/langgraph/0F172A" },
    { name: "Prompt Engineering",icon:"https://cdn.simpleicons.org/langchain/1C3C3C" },
    { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
  ],

  // Row 5 (4)
  [
    {
      name: "Netlify",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    { name: "Agile", icon: "https://cdn.simpleicons.org/jira/0052CC" },
  ],

  // Row 6 (3)
  [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    { name: "SDLC", icon: "https://cdn.simpleicons.org/git/F05032" },
  ],

  // Row 7 (2)
  [
    {
      name: "WebSockets",
      icon: "https://cdn.simpleicons.org/socketdotio/010101",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ],
];

const TechStack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 24, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          delay: i * 0.025,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    });
  }, []);

  let cardIndex = 0;

  return (
    <div className="ts-section techstack" ref={sectionRef}>
      {/* Background glow orbs */}
      <div className="ts-glow ts-glow-1" />
      <div className="ts-glow ts-glow-2" />

      {/* Ghost heading behind grid */}
      <h2 className="ts-heading">
        Tech <span>Stack</span>
      </h2>

      <div className="ts-grid-wrapper">
        {techRows.map((row, rowIndex) => (
          <div className="ts-row" key={rowIndex}>
            {row.map((tech) => {
              const idx = cardIndex++;
              return (
                <div
                  className="ts-card"
                  key={tech.name}
                  ref={(el) => {
                    cardsRef.current[idx] = el!;
                  }}
                >
                  <div className="ts-icon-wrap">
                    <img src={tech.icon} alt={tech.name} className="ts-icon" />
                  </div>
                  <span className="ts-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
