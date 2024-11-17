import React from "react";

function Skills() {
  const skills = {
    "JavaScript": "Advanced",
    "React": "Intermediate",
    "CSS": "Advanced",
    "HTML": "Advanced",
    "Node.js": "Intermediate",
    "Python": "Beginner"
  };

  return (
    <section className="skills-section">
      <div className="neumorphic-flat skill-container">
      <h1>Skills</h1>
      <div className="skill-grid">
        {Object.entries(skills).map(([skillName, skillLevel]) => (
          <div className="neumorphic-convex skill-card" key={skillName}>
            <h2>{skillName}</h2>
            <h4>{skillLevel}</h4>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;