import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/hero";
import About from "./components/about";
import Education from './components/education';
import SvgSlider from './components/skills';
import Porfolio from './components/porfolio';




function App() {
  return (
    <div className="App">
      <Nav />
      <header id="header" className="section">
        <Hero />
      </header>
      <section id="main" className="section">
        <About />
        <div className='slider'>
          <SvgSlider />
        </div>
        <Education />
        <Porfolio />
      </section>
    </div>
  );
}

export default App;
