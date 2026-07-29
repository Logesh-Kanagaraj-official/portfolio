import { useEffect, useRef } from "react";
import "./styles/Certifications.css";
import { certifications } from "../data/portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".cert-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="cert-section section-container" id="certifications" ref={sectionRef}>
      <div className="cert-container">
        <h2>
          Certifications <span>&amp; Achievements</span>
        </h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              className="cert-card"
              key={cert.id}
              style={{ "--cert-color": cert.color } as React.CSSProperties}
            >
              <div className="cert-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 15L8.5 21L12 19.5L15.5 21L12 15Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M9 10L11 12L15 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cert-body">
                <div className="cert-issuer">{cert.issuer}</div>
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
