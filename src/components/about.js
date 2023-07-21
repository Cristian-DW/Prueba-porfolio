import React from "react";
import ImgCard from '../media/img-about.webp';


function About(){
    return(
        <div id="about" className='aboutMe'>
            <div className='about'>
            <h3>¡HOLA!</h3>
            <h3> </h3>
                <p>Soy Cristian Castro, un apasionado desarrollador frontend web con experiencia en la creación de experiencias digitales atractivas y funcionales. Durante mi carrera profesional, he trabajado en diversos proyectos web, desde sitios web empresariales hasta aplicaciones web dinámicas. Estoy familiarizado con los estándares de la industria y las mejores prácticas de desarrollo frontend, y me mantengo actualizado con las últimas tendencias y tecnologías. </p>
            </div>
            <div className='img'>
                <img src= {ImgCard} alt="foto"/>
            </div>
        </div>
    );
}

export default About;