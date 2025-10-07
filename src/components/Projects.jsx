
import React from "react";
import "./project.css";

const projectsData = [
  {
    title: "College Canteen",
    desc: "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and AI-powered insights.",
    tech: ["React", "TypeScript", "D3.js", "Node.js"],
    image: "/burger.webp", 
    liveDemo: "https://my-college-canteen-9wn82jxhe.vercel.app",
    codeLink: "https://github.com/Satyakrishnaveni/my-college-canteen"
  },
  {
    title: "E-commerce",
    desc: "Modern e-commerce platform with advanced product filtering, secure payment integration, and responsive design.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    image: "/Ecommerce.jpg",
    liveDemo: "#",
    codeLink: "https://github.com/Satyakrishnaveni/ecommerce"
  },
  {
    title: "Campus Navigator",
    desc: "Real-time navigation app for students to find exam buildings, view maps, and access notifications.",
    tech: ["React JS", "Express.js", "MongoDB", "Google Maps API"],
    image: "/campus navigator image.webp",
    liveDemo: "https://project-space-git-main-satya-krishnaveni-manekulas-projects.vercel.app",
    codeLink: "https://github.com/Satyakrishnaveni/project-space"
  },
  {
    title: "RecipeHunt",
    desc: "Simple food recipe app lets users search dishes and instantly view recipes.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/receipeehut.jpg",
    liveDemo: "https://react-git-main-satya-krishnaveni-manekulas-projects.vercel.app/",
    codeLink: "https://github.com/Satyakrishnaveni/react"
  },
  {
    title: "ForeverUs Website",
    desc: "Advanced data visualization tool with interactive charts and custom dashboards.",
    tech: ["React.js", "JavaScript", "Framer Motion", "CSS"],
    image: "/dm5.jpg",
    liveDemo: "#",
    codeLink: "https://github.com/Satyakrishnaveni/ForeverUs-Website"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="glass projects-content">
        <h2>Featured Projects</h2>
        <p>A showcase of my latest work in web development, mobile apps, and AI integration</p>
        <div className="projects-grid">
          {projectsData.map((proj, i) => (
            <div key={i} className="project-card">
              <img src={proj.image} alt={proj.title} className="project-image" />
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <p className="tech">
                {proj.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </p>
              <div className="project-links">
                <a href={proj.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={proj.codeLink} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/Satyakrishnaveni"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View All Projects on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
