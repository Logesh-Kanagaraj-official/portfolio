import { useEffect, useRef } from "react";
import "./styles/Education.css";
import { education } from "../data/portfolioData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="edu-section section-container" id="education">
      <div className="edu-container">
        <h2>
          Education <span>&amp; Qualifications</span>
        </h2>
        <div className="edu-timeline">
          {education.map((item, index) => (
            <div
              className={`edu-item ${index % 2 === 0 ? "edu-left" : "edu-right"}`}
              key={item.id}
              ref={(el) => { itemsRef.current[index] = el; }}
            >
              <div className="edu-connector">
                <div className="edu-dot"></div>
              </div>
              <div className="edu-card">
                <div className="edu-period">{item.period}</div>
                <h4 className="edu-degree">{item.degree}</h4>
                <h5 className="edu-institution">{item.institution}</h5>
                {item.grade && (
                  <div className="edu-grade">
                    <span>Grade:</span> {item.grade}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="edu-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
