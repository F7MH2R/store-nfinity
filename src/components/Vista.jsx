import React from "react";
import Reloj from "../assets/images/reloj1.png"; //
import "../styles/QuienesSomos.css";
function VistaRe() {
  return (
    <div className="quienes-somos-container">
      <div className="column contenido">
        <h1>Cosmograph Daytona</h1>
        <h3>$87,900</h3>
        <p>
          Este modelo presenta una esfera azul glaciar con contadores con
          círculos concéntricos, unos índices en aplique de oro de 18 quilates y
          agujas con visualización Chromalight, un material luminiscente de alta
          legibilidad. El segundero central permite leer los octavos de segundo
          con gran precisión, mientras que los dos contadores en la esfera
          muestran el tiempo transcurrido en horas y minutos. Los pilotos pueden
          planificar con precisión sus tiempos y tácticas sin error.
        </p>
      </div>
      <div className="column contenido">
        <img src={Reloj} alt="#" />
      </div>
    </div>
  );
}

export default VistaRe;
