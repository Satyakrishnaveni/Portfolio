import React from "react";
import { FaCode, FaBolt, FaPalette, FaDownload } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About <span>Me</span></h2>

      <div className="about-container">
       
        <div className="about-image">
          <img src="/thubhub2.jpg" alt="Satya Krishnaveni" />
        </div>

     
        <div className="about-text-box">
          <h3 className="title">Full-Stack Developer & Tech Enthusiast</h3>
          <p>
            I'm a passionate full-stack developer who loves creating innovative web
            solutions. With expertise in modern frameworks and a keen eye for design,
            I build applications that are not only functional but also visually stunning.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>

          <a href="/resume.pdf" download className="resume-btn">
            <FaDownload /> Download Resume
          </a>

         
          <div className="tech-skills-row">
            <div className="skill-card frontend">
              <FaCode size={24} />
              <h4>Frontend</h4>
              <p>React, TypeScript, JavaScript</p>
            </div>

            <div className="skill-card backend">
              <FaBolt size={24} />
              <h4>Backend</h4>
              <p>Node.js, Python, SQL, MongoDB</p>
            </div>

            <div className="skill-card uiux">
              <FaPalette size={24} />
              <h4>UI/UX Design</h4>
              <p>Figma, Tailwind CSS, Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
