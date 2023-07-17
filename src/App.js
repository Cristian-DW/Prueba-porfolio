import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/hero";
import About from "./components/about";
import Education from './components/education';


function App() {
  return (
    <div className="App">
        <Nav/>
      <header id="header" className="section">
        <Hero/>
      </header>
      <section id="main" className="section">
        <About/>
        <Education/>
      </section>
    </div>
  );
}

export default App;
