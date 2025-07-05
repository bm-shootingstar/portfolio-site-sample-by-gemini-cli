import React from 'react';

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <div className="row">
        <div className="col-md-4">
          <img src="/portfolio_site/images/profile.svg" className="img-fluid rounded-circle" alt="Your Name" />
        </div>
        <div className="col-md-8">
          <h2>Hello, I'm [Your Name]</h2>
          <p>I am a passionate and creative developer with a love for building beautiful and functional web applications. I have experience in various technologies and I am always eager to learn new things.</p>
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
