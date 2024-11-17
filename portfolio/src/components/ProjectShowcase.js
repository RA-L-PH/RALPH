import React from 'react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A groundbreaking web app.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://github.com/RA-L-PH/project-alpha',
  },
  // Add more projects
];

const ProjectShowcase = () => (
  <section className="my-8">
    <h2 className="text-2xl font-bold text-center">Projects</h2>
    <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <a
          href={project.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-light dark:bg-dark rounded-xl shadow-neomorphic transition-transform hover:scale-105"
        >
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>{project.description}</p>
          <p className="text-sm text-primary">{project.technologies.join(', ')}</p>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectShowcase;
