import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../projectData';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.imageUrl} className="img-fluid" alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectDetail;
