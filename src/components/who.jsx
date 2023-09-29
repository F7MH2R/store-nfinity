import React from "react";
import "../styles/QuienesSomos.css"; // Importa el archivo CSS para estilos
import fam from "../assets/images/quienes.png";

function QuienesSomos() {
  return (
    <div className="quienes-somos-container">
      <div className="column">
        <h2>Nuestra Historia</h2>
        <p>
          Es la historia de Deku y Bryan, dos amigos apasionados por los relojes
          que sueñan con abrir la tienda de relojes definitiva. Juntos,
          transforman un antiguo local en el corazón de la ciudad en una tienda
          de relojes única con un diseño impresionante. Su enfoque en ofrecer
          relojes exclusivos y un servicio personalizado les permite destacar en
          el negocio de la relojería. A lo largo de los años, StoreInfinity se
          convierte en una leyenda en la comunidad de amantes de los relojes, y
          su legado perdura a través de generaciones, demostrando que cuando se
          combina la pasión y la dedicación, el tiempo se vuelve infinito.
        </p>
      </div>
      <div className="column">
        <img className="quienes1" src={fam} alt="" />
      </div>
    </div>
  );
}

export default QuienesSomos;
