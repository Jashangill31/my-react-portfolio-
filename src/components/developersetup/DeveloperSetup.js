// DeveloperSetup.js
import React from 'react';
import './DeveloperSetup.css';  // Assuming you still want to link to the CSS file

const DeveloperSetup = () => {
  return (
    <div className="developer-setup">
      <h2>Developer Setup</h2>
      <p>Here are the instructions for setting up the development environment:</p>
      <ul>
        <li>Install Visual Studio Code (VSCode).</li>
        <li>Install Node.js and NPM.</li>
        <li>Clone the repository.</li>
        <li>Run <code>npm install</code> to install the dependencies.</li>
        <li>Run <code>npm start</code> to start the development server.</li>
      </ul>
    </div>
  );
};

export default DeveloperSetup;
