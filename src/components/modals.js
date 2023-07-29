// Modals.js (o Modals.jsx)
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {

  const {boton , onClose}=props;

  let contenidoCuerpo, contenidoPie;


  if(boton === 'icono1'){
    contenidoCuerpo=(
      <div>
      <h4>certificación de Google Activate</h4>
      <p className='custom-text'> Loremjdhajk jasdhkasghd hsagdhasgd asgdhags hjsgadhj gasdhgh hgasdhjg </p>
      </div>
    );

      contenidoPie= (
        <div>
          <button onClick={onClose}>Cerrar</button>
        </div>
      )

  }else if (boton === 'icono2') {
    contenidoCuerpo = (
      <div>
        <h4>Contenido para Icono 2</h4>
        <p className='custom-text'>
          Fusce in dui at dui iaculis tempus. Nullam ut dolor nec
          quam dictum rhoncus ut eget odio.
        </p>
      </div>
    );

    contenidoPie = (
      <Button onClick={onClose}>Cerrar Icono 2</Button>
    );
  } else {
    contenidoCuerpo = (
      <div>
        <h4>Contenido Predeterminado</h4>
        <p className='custom-text'>
          Este es el contenido predeterminado cuando no se selecciona ningún ícono o botón.
        </p>
      </div>
    );

    contenidoPie = (
      <Button onClick={onClose}>Cerrar Predeterminado</Button>
    );
  }

  


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Educación
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {contenidoCuerpo}
      </Modal.Body>
      <Modal.Footer>
        {contenidoPie}
      </Modal.Footer>
    </Modal>
  );
}

export default Modals;