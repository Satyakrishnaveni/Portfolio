
import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-content glass">

        {/* Header Box */}
        <div className="resume-header-box">
          <h2>Resume</h2>
          <p>Download my resume or explore my work and journey below</p>
          <a href="/satyakresume80.pdf" download className="resume-btn">
            Download Full Resume
          </a>
        </div>

        <div className="resume-layout">

          <div className="resume-left">
            <h2 className="section-title">Work Experience</h2>
            <div className="resume-card experience-card">
              <div className="resume-item">
                <h3>Full Stack Web Development Intern</h3>
                <span className="date">May 2025 – Jun 2025</span>
                <p className="resume-company">Technical Hub Pvt. Ltd.</p>
                <p>
                  Developed 'College Canteen' – a campus food ordering system using React.js, Node.js/Express, MongoDB, and Supabase for authentication.
                </p>
              </div>
              <div className="resume-item">
                <h3>Full Stack Java Intern</h3>
                <span className="date">Jun 2023 – Jul 2023</span>
                <p className="resume-company">Skilltoniks Technologies Pvt. Ltd.</p>
                <p>
                  Completed an MSME-recognized internship, contributing to full-stack development tasks and received formal appreciation from the company director.
                </p>
              </div>
              <div className="resume-item">
                <h3>Salesforce Administrator Intern</h3>
                <span className="date">Aug 2022 – Oct 2022</span>
                <p className="resume-company">SmartInternz</p>
                <p>
                  Completed an 8-week AICTE-certified virtual internship gaining experience in Salesforce CRM administration and automation tools.
                </p>
              </div>
            </div>
          </div>

          
          <div className="resume-right">
            <h2 className="section-title">Education & Certifications</h2>
            <div className="resume-card education-card">
              <div className="resume-item">
                <h3>Masters Of Computer Applications</h3>
                <span className="date">2024 – 2026</span>
                <p className="resume-university">Aditya University</p>
                <p>Aspiring Full Stack Developer specializing in Web Development and full-stack technologies.</p>
              </div>
            </div>

           <div className="resume-card">
  <div className="resume-icon">📜</div>
  <h3>Certifications</h3>
  
  <div className="certification-box">  {/* Wrapper Box */}
    <div className="certification-item">
      Full Stack Development (FSD) Training - Technical Hub
    </div>
    <div className="certification-item">
      JavaScript Essentials 1 & 2 - Cisco Networking Academy
    </div>
    <div className="certification-item">
      HTML Training - EduPyramids, IIT Bombay (Aditya University), Score: 90
    </div>
    <div className="certification-item">
      Infosys Springboard – Java, Python, React.js Certifications
    </div>
  </div>
</div>

          </div>
        </div>

      
        <div className="contact-box">
          <h2>Ready to Work Together?</h2>
          <p>I'm always open to discussing new opportunities and exciting projects.</p>
          <div className="contact-buttons">
  
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
