// src/components/navigation/Navigation.js

import React from 'react';
import { Link } from 'react-router-dom'; // To navigate between sections

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="#work">Work</Link></li>
        <li><Link to="#skills">Skills</Link></li>
        <li><Link to="#developer-setup">Developer Setup</Link></li>
        <li><Link to="#resources">Resources</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
