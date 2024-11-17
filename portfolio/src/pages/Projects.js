import React from 'react';

const projects = [
  {
    title: 'Project A',
    description: 'A web app that does X, Y, Z.',
    link: 'https://github.com/RA-L-PH/project-a',
  },
  {
    title: 'Project B',
    description: 'A tool for achieving A, B, C.',
    link: 'https://github.com/RA-L-PH/project-b',
  },
];

const Projects = () => (
  <div className="py-10">
    <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg hover:shadow-xl transition-shadow"
        >
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
