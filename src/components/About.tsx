import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-accent-line"></div>
        <p className="para">
          I am an Associate Software Engineer and Full Stack Developer with
          experience building scalable, user-friendly web applications. My
          expertise includes HTML, CSS, JavaScript, React, Next.js, Python,
          Django, FastAPI, and PostgreSQL. At Mitrahsoft Solutions, I develop
          modern software solutions, build RESTful APIs, and contribute to
          creating efficient, high-performance applications.
        </p>

        <p className="para">
          I am passionate about Full Stack Development and Artificial
          Intelligence, with a growing focus on Large Language Models (LLMs),
          Retrieval-Augmented Generation (RAG), and AI Agents. I enjoy solving
          real-world problems, continuously learning new technologies, and
          building impactful digital products that deliver exceptional user
          experiences.
        </p>

        <div className="about-skills-grid">
          <div className="about-skill-group">
            <h5>Programming Languages</h5>
            <div className="about-tags">
              <span>Java</span>
              <span>Python</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h5>Frontend</h5>
            <div className="about-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h5>Backend</h5>
            <div className="about-tags">
              <span>Python</span>
              <span>Django</span>
              <span>Django REST Framework</span>
              <span>FastAPI</span>
            </div>
          </div>

          <div className="about-skill-group">
            <h5>AI & LLM</h5>
            <div className="about-tags">
              <span>LLMs</span>
              <span>RAG</span>
              <span>Prompt Engineering</span>
              <span>AI Agents</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h5>Databases</h5>
            <div className="about-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h5>Tools</h5>
            <div className="about-tags">
              <span>VS Code</span>
              <span>Git</span>
              <span>Figma</span>
              <span>Postman</span>
              <span>Docker</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h5>Concepts</h5>
            <div className="about-tags">
              <span>REST APIs</span>
              <span>JWT</span>
              <span>WebSockets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
