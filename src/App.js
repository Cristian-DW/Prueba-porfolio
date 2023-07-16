import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/hero";
import About from "./components/about";


function App() {
  return (
    <div className="App">
        <Nav/>
      <header id="header" className="section">
        <Hero/>
      </header>
      <section id="main" className="section">
        <About/>
      </section>
    </div>
  );
}

export default App;
