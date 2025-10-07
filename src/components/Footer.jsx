import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-wrapper">
      {/* Left Column - Portfolio */}
      <div className="footer-col footer-brand">
        <h2 className="footer-title">PORTFOLIO</h2>
        <p className="footer-desc">
          Full-Stack Developer passionate about<br />
          creating innovative web solutions with<br />
          cutting-edge technology.
        </p>
        <div className="footer-socials">
  <a
    href="https://github.com/Satyakrishnaveni"
    target="_blank"
    rel="noopener noreferrer"
    className="github-icon"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/satya-krishnaveni-manekula-a1b169280"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin-icon"
  >
    <FaLinkedin />
  </a>
  <a href="#" className="twitter-icon">
    <FaTwitter />
  </a>
  <a href="#" className="email-icon">
    <FaEnvelope />
  </a>
</div>

      </div>

      <div className="footer-col footer-center">
        <h3 className="footer-heading">Quick Links</h3>
        <div className="footer-links-columns">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
          </ul>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      
      <div className="footer-col footer-right">
        <h3 className="footer-heading">Get In Touch</h3>
        <div className="footer-contact">
          <p>satyakrishnavenimanikala@gmail.com</p>
          <p>+91 7095771517</p>
          <p>Ap, India</p>
        </div>
      </div>
    </div>

    
    <div className="footer-bottom">
      <p>© 2024 satya Developer. All rights reserved.</p>
     
    </div>
  </footer>
);

export default Footer;




