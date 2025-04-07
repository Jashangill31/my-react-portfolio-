import React from 'react';
import './App.css';
import BasicInfo from './components/basicInfo/BasicInfo'; // Correct import for BasicInfo
import Work from './components/work/Work'; // Correct import for Work
import TechList from './components/techList/TechList'; // Correct import for TechList
import DeveloperSetup from './components/developersetup/DeveloperSetup';  // Correct uppercase 'D'


function App() {
  return (
    <div className="App">
      <BasicInfo />
      <Work />
      <TechList />
      <DeveloperSetup />
    </div>
  );
}

export default App;
