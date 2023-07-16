import React, { useEffect, useState } from "react";

const palabras = ["Desarrollador", "Diseñador", "Apasionado"];

function Title() {
  const [primeraPalabra, setPrimeraPalabra] = useState(0);

  useEffect(() => {
    const intervalos = setInterval(() => {
      setPrimeraPalabra((indiceanterior) => (indiceanterior + 1) % palabras.length);
    }, 2000);

    return () => clearInterval(intervalos);
  }, []);

  return (
        <span>{palabras[primeraPalabra]}</span>

  );
}

export default Title;
