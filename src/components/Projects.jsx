import React from 'react';

function Projects() {
  const projectData = [
    {
      title: "Project One",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imageUrl: "/images/project1.svg"
    },
    {
      title: "Project Two",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      imageUrl: "/images/project2.svg"
    },
    {
      title: "Project Three",
      description: "This is a longer card with supporting text below as a natural lead-in to additional content.",
      imageUrl: "/images/project3.svg"
    }
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projectData.map((project, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
