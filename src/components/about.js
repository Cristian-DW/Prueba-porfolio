import React from "react";
import ImgCard from '../media/img-about.svg';


function About(){
    return(
        <div className='aboutMe'>
            <div className='img'>
                <img src= {ImgCard} alt="foto"/>
            </div>
            <div className='profile'>
            <h3>Sobre mi</h3>
                <p>Soy desarrollador web, te traigo </p>
            </div>
        </div>
    );
}

export default About;