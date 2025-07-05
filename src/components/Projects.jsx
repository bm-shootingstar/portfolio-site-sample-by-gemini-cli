import React from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../projectData';

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project, index) => (
          <div className="col" key={index}>
            <Link to={`/projects/${project.id}`} className="card-link">
              <div className="card h-100">
                <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
