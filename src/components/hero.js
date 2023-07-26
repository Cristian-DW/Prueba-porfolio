import React from "react";
import Title from "./changesWords"
import Animation from "./animation"





function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="name">Desarrollador Frontend</h1>
        <h2 className="title"> <Title /></h2>
        <p className="description">
          Me apasiona crear experiencias que sean atractivas, accesibles y
          centradas en el usuario.
        </p>
        <a className="button" href="#about">
          Explora mis creaciones
        </a>
      </div>
      <Animation />
    </div>
    
  );
}

export default Hero;