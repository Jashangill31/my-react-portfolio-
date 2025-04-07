import React from 'react';
import project1 from '../../assets/images/project1.jpg'; // Import the first image
import project2 from '../../assets/images/project2.jpg'; // Import the second image
import './Work.css'; // Import the CSS file for styling

const Work = () => {
  return (
    <div className="work-container">
      <h2>My Work</h2>
      <div className="project-item">
        <img src={project1} alt="Project 1" />
        <p className="project-description">
          This is the first project I developed using React. It demonstrates the basic features of React such as components, state management, and routing. It was built with a focus on creating a smooth user interface and optimizing performance.
        </p>
      </div>
      <div className="project-item">
        <img src={project2} alt="Project 2" />
        <p className="project-description">
          The second project is a full-stack application where I integrated React on the frontend with Node.js on the backend. The application allows users to register, log in, and interact with a dynamic database. It uses RESTful APIs and MongoDB for data persistence.
        </p>
      </div>
    </div>
  );
};

export default Work;
