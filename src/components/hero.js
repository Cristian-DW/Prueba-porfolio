import React from "react";
import Title from "./changesWords"

function Hero() {
    
  return(
    <div className="hero container">
        <h2 className="name">Hola, soy Cristian  Castro</h2>
        <h1 className="title"><Title/></h1>
        <a className="button" href="#about">Explora  mis  creaciones</a>
    </div>
  );
}

export default Hero;