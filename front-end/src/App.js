import './App.css';
import React, { useEffect} from "react";
import NavbarComp from './components/NavbarComp.js';
import IntroComp from './components/IntroComp.js';
import FooterComp from './components/FooterComp.js';
import ProjectsComp from './components/ProjectsComp.js';
import SkillsComp from './components/SkillsComp.js';
import EducationComp from './components/EducationComp.js';
import ContactComp from './components/ContactComp.js';


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
      <div className='bottom-left-angle'></div>
      <SkillsComp />
      <div className='top-right-angle'></div>
      <EducationComp />
      <ContactComp />
      <FooterComp />
    </div>
  );
}

export default App;
