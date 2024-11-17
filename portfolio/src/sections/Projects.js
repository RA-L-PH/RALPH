import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";

function Projects() {
  const projects = {
    project1: {
      name: "Project One",
      headerImage: "path/to/image1.jpg",
      description: "This is the first project.",
      technologies: ["React", "JavaScript", "CSS"],
      githubLink: "https://github.com/user/project1",
      livePreviewLink: "https://livepreview.com/project1",
    },
    project2: {
      name: "Project Two",
      headerImage: "path/to/image2.jpg",
      description: "This is the second project.",
      technologies: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/user/project2",
      livePreviewLink: "https://livepreview.com/project2",
    },
    project3: {
      name: "Project Three",
      headerImage: "path/to/image3.jpg",
      description: "This is the third project.",
      technologies: ["Python", "Django", "PostgreSQL"],
      githubLink: "https://github.com/user/project3",
      livePreviewLink: null,
    },
  };

  return (
    <section className="projects-section">
      <div className="neumorphic-flat projects-container">
        <h1>Projects</h1>
        <div className="project-grid">
          {Object.entries(projects).map(([key, project]) => (
            <div key={key} className="neumorphic-pressed project-card">
              <img src={project.headerImage} alt={`${project.name} header`} />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="neumorphic-flat tech-tag">{tech}</span>
                ))}
              </div>
              <div className="links">
              <a className="neumorphic-convex" href={project.githubLink} target="_blank" rel="noopener noreferrer"><IoLogoGithub/></a>
              {project.livePreviewLink && (
                <a className="neumorphic-convex" href={project.livePreviewLink} target="_blank" rel="noopener noreferrer"><FaPlay/></a>
              )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;