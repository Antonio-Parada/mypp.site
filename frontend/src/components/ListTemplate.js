import React from 'react';
import './ListTemplate.css';

const ListTemplate = () => {
  const projects = [
    { id: 1, title: 'Project Alpha', description: 'A detailed look into the initial phase of Project Alpha, focusing on conceptual design and early prototypes.', imageUrl: 'https://via.placeholder.com/100x75?text=Project+1' },
    { id: 2, title: 'Project Beta', description: 'Exploring the development and testing stages of Project Beta, highlighting key challenges and solutions.', imageUrl: 'https://via.placeholder.com/100x75?text=Project+2' },
    { id: 3, title: 'Project Gamma', description: 'The final review of Project Gamma, including deployment strategies and post-launch analysis.', imageUrl: 'https://via.placeholder.com/100x75?text=Project+3' },
  ];

  return (
    <div className="list-template-page">
      <h1>List Portfolio Template</h1>
      <p>This template offers a detailed view for project descriptions and context.</p>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="list-item">
            <img src={project.imageUrl} alt={project.title} className="list-item-image" />
            <div className="list-item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTemplate;