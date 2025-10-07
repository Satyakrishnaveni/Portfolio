import React from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaPaperPlane 
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>Ready to bring your ideas to life? Let's discuss your next project</p>
      </div>

      <div className="contact-container">
        {/* Left Box */}
        <div className="contact-left">
          <h3>Let's Connect</h3>
          <p>
            I'm always excited to work on new projects and collaborate with amazing people. Whether you have a project in mind or just want to chat about technology, feel free to reach out!
          </p>

          <div className="contact-info">
            <div className="contact-card">
              
               <FaEnvelope className="icon email" />
              <div>
                <small>Email</small>
                <p>satyakrishnavenimanikala@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <FaPhone className="icon phone-icon" />
              <div>
                <small>Phone</small>
                <p>+91 7095771517</p>
              </div>
            </div>

            <div className="contact-card">
              <FaMapMarkerAlt className="icon location-icon" />
              <div>
                <small>Location</small>
                <p>Eluru, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>

         
          <h4 style={{ color: "#6EE7B7" }}>Follow Me</h4>

          <div className="contact-socials">
            <a href="https://github.com/username" target="_blank" style={{ color: "#fff" }}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" style={{ color: "#0A66C2" }}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/username" target="_blank" style={{ color: "#1DA1F2" }}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com/username" target="_blank">
              <FaInstagram style={{ color: "#E1306C" }} />
            </a>
          </div>
        </div>

        
        <div className="contact-right">
          <h3>Send Message</h3>
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />

            <label>Message</label>
            <textarea placeholder="Tell me about your project..." rows="5"></textarea>

            <button type="submit">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
