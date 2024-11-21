import React, { useState } from "react";

function Skills() {
  const [activeSkillCategory, setActiveSkillCategory] = useState("languages");

  const languages = {
    "JavaScript": "Advanced",
    "React": "Intermediate",
    "CSS": "Advanced",
    "HTML": "Advanced",
    "Node.js": "Intermediate",
    "Python": "Beginner"
  };

  const frameworks = {
    "Express": "Intermediate",
    "Bootstrap": "Intermediate",
    "Materialize": "Intermediate",
    "TailwindCSS": "Intermediate",
    "Sass": "Intermediate",
  }

  const tools = {
    "Git": "Advanced",
    "GitHub": "Advanced",
    "VS Code": "Advanced",
    "Postman": "Intermediate",
    "Netlify": "Intermediate",
    "Heroku": "Intermediate",
  }

  const databases = {
    "MongoDB": "Intermediate",
    "MySQL": "Intermediate",
    "PostgreSQL": "Intermediate",
    "Mongoose": "Intermediate",
  }

  const skillCategories = {
    languages,
    frameworks,
    tools,
    databases
  };

  return (
    <section className="skills-section">
      <div className="neumorphic-flat skill-container">
        <h1>Skills</h1>
        
        {/* Sliding Radio Button */}
        <div className="skill-category-selector">
          {Object.keys(skillCategories).map((category) => (
            <label key={category} className="radio-label">
              <input
                type="radio"
                name="skillCategory"
                value={category}
                checked={activeSkillCategory === category}
                onChange={() => setActiveSkillCategory(category)}
              />
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </label>
          ))}
        </div>

        <div className="skill-grid">
          {Object.entries(skillCategories[activeSkillCategory]).map(([skillName, skillLevel]) => (
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