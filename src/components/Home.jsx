import React from 'react';

function Home() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to My Portfolio</h1>
        <p className="col-md-8 fs-4">I'm a passionate developer creating amazing web experiences. Explore my projects and get to know me better.</p>
        <a className="btn btn-primary btn-lg" href="#/projects" role="button">View Projects</a>
      </div>
    </div>
  );
}

export default Home;
