import './App.css';
import NavbarComp from './components/NavbarComp.js';
import IntroComp from './components/IntroComp.js';
import FooterComp from './components/FooterComp.js';

function App() {
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
