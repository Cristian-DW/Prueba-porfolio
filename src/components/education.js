import React from "react";
import ImgSena from "../media/sena.png"
import ImgMicrosoft from "../media/microsoft.png"
import ImgGoogle from "../media/google.png"
import Modals from "./modals"

function Education() {
  const [modalShow, setModalShow] = React.useState(false);



  return (
    
    <div id="education" className="education">
      <div className="profile">
        <h3>Educación</h3>
        <p>
          Profesional con habilidades para interpretar y diseñar sistemas
          informáticos que satisfacen las necesidades del usuario. Con
          conocimientos en programación, análisis de datos, interfaces de
          usuario, bases de datos y seguridad informática. Destreza en trabajar
          con computadoras, comunicarse con usuarios y colegas, y experiencia en
          metodologías ágiles para el desarrollo de software.
        </p>
      </div>
      <div className="college">
          <article className="card">
            <img className="img-education" src={ImgSena} alt="curso"/>
            <h3>Analisis y Desarrollo de Software </h3>
            <p>Servicio Nacional de Apredizaje</p>
            <p>2022 - 2024</p>
            <p>Bogotá DC</p>
          </article>
          <article className="card">
          <img className="img-education" src={ImgMicrosoft} alt="curso" onClick={() => setModalShow(true)}/>
      <Modals show={modalShow} onHide={() => setModalShow(false)}/>
          </article>
          <article className="card">
          <img className="img-education" src={ImgGoogle} alt="curso"/>
            
          </article>
          <article className="card">
          <img className="img-education" src={ImgGoogle} alt="curso"/>
            
          </article>
      </div>
    </div>
  );
}

export default Education;