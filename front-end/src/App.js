import './App.css';
import NavbarComp from './components/NavbarComp.js';
import IntroComp from './components/IntroComp.js';

function App() {
  return (
    <div className="app">
      <NavbarComp />
      <IntroComp />
      <div className='top-right-angle'></div>
      <div className="content-section">
        <p>This is the page</p>
      </div>
    </div>
  );
}

export default App;
