import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/hero";
import About from "./components/about";
import Education from './components/education';
import ImageSlider from './components/skills';
import Porfolio from './components/porfolio';
import ContactForm  from './components/contact';






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
          <ImageSlider />
        </div>
        <Education />
        <Porfolio />
        <ContactForm/>
      </section>
      
    </div>
  );
}

export default App;
