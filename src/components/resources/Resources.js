// src/components/resources/Resources.js

import React from 'react';

const Resources = () => {
  return (
    <div className="resources">
      <h2>Supporting Resources</h2>
      <ul>
        <li>
          <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
            FreeCodeCamp: Learn to code for free
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">
            React Documentation: Official React Docs
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer">
            MDN JavaScript Guide: Learn JavaScript
          </a>
        </li>
        <li>
          <a href="https://www.nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
            Node.js Documentation
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Resources;
