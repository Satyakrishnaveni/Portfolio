
import React from "react";

const SkillBar = ({ name, level }) => {
  return (
    <div className="skill-bar">
      <span>{name}</span> 
      <div className="bar">
      
        <div className="progress" style={{ width: `${level}%` }} data-level={level}></div>
      </div>
      <span>{level}%</span> 
    </div>
  );
};

export default SkillBar;
