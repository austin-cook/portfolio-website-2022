import './App.css';
import React, { useEffect} from "react";
import NavbarComp from './components/NavbarComp.js';
import IntroComp from './components/IntroComp.js';
import FooterComp from './components/FooterComp.js';


function App() {
  useEffect(() => {
    document.title = "Austin Cook | Software Engineer";  
  }, []);

  return (
    <div className="app">
      <NavbarComp />
      <IntroComp />
      <div className='top-right-angle'></div>
      <div className="content-section">
        <p>This is the page</p>
      </div>
      <FooterComp />
    </div>
  );
}

export default App;
