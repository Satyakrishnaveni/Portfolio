// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollTo = (id) => {
//     document.getElementById(id).scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false); 
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">PORTFOLIO</div>

      
//       <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
//         {["Home","About","Projects","Skills","Resume","Contact"].map((section) => (
//           <li key={section} onClick={() => scrollTo(section.toLowerCase())}>
//             {section}
//           </li>
//         ))}
//       </ul>

      
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import "./Home.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li className="home-link"><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li className="resume-link"><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
