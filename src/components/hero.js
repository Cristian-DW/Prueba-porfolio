import React from "react";
import Title from "./changesWords"
import Icon from "../media/down.svg"


function Hero() {

  
  return(
    <div className="hero container">
        <h2 className="name">Desarrollador Frontend</h2>
        <h1 className="title"><Title/></h1>
        <a className="button" href="#about">Explora  mis  creaciones</a>
        <div className="scroll">
          <p>Scroll</p>
          <img src={Icon} alt="icono de scroll"/>
        </div>
    </div>
  );
}

export default Hero;