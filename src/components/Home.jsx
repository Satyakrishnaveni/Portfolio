import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="home-section">
      
      <nav className="navbar">
        <div className="logo">PORTFOLIO</div>

       
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

       
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

     
      <div className="home-container">
        <div className="home-left">
          <h1 className="name">Satya Krishnaveni</h1>
          <h2 className="title">Full-Stack Developer</h2>
          <p className="tagline">
            Crafting digital experiences with cutting-edge technology. Passionate
            about creating modern web solutions that push the boundaries of innovation.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="home-right">
          <img
            src="/thubhub2.jpg"
            alt="Satya Krishnaveni"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};


export default Home;
