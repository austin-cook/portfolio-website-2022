import './App.css';
import React, { useEffect} from "react";
import NavbarComp from './components/NavbarComp.js';
import IntroComp from './components/IntroComp.js';
import FooterComp from './components/FooterComp.js';
import ProjectsComp from './components/ProjectsComp.js';
import SkillsComp from './components/SkillsComp.js';
import EducationComp from './components/EducationComp.js';


function App() {
  useEffect(() => {
    document.title = "Austin Cook | Software Engineer";  
  }, []);

  return (
    <div className="app">
      <NavbarComp />
      <IntroComp />
      <div className='top-right-angle'></div>
      <ProjectsComp />
      <div className='example-class'></div>
      <SkillsComp />
      <div className='top-right-angle'></div>
      <EducationComp />
      <FooterComp />
    </div>
  );
}

export default App;
