
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostman, SiExpress, SiTypescript } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "React JS", icon: <FaReact color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiTypescript color="#F7DF1E" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#fff" /> },
  { name: "SQL", icon: <FaDatabase color="#003B57" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Git/GitHub", icon: <FaGitAlt color="#F05032" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "Java", icon: <FaJava color="#007396" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <p>These are the technologies and tools I use to build projects and learn new things.</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

