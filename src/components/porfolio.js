import React from 'react';
import Proyecto1 from "../media/google.png"

function Porfolio() {
    return (
      <div id="porfolio" className=" porfolio">
        <div className="creations profile">
          <h3>Porfolio</h3>
          <p>
            Explora mis creaciones
          </p>
        </div>
        <div className="projects">
            <article className="project">
                <img src={Proyecto1} alt='proyecto uno'/>
            </article>
            <article className="project">
           
              
            </article>
            <article className="project">
            
              
            </article>
            <article className="project">
            
              
            </article>
        </div>
      </div>
    );
  }

  export default Porfolio;