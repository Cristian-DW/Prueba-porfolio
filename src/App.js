import React, {useEffect} from "react";
import './App.css';
import Nav from "./components/Nav";
import Hero from "./components/hero";
import About from "./components/about";


function App() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const screenHeight = window.innerHeight;
    const screen1 = document.getElementById("header");
    const screen2 = document.getElementById("main");

    if (screen1 && screen2) {
      const screen1Height = screen1.offsetHeight;
      const scrollPosition = (scrollTop / screen1Height) * 12;
      const translateY = (scrollPosition / 20000) * screenHeight;
      screen2.style.transform = `translateY(-${translateY}px)`;
    }
  };


  return (
    <div className="App">
      <header id="header" className="section">
        <Nav/>
        <Hero/>
      </header>
      <section id="main" className="section">
        <About/>
      </section>
    </div>
  );
}

export default App;
