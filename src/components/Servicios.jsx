import React from "react";
import "../styles/Service.css";
import encabezadoImage from "../assets/images/Enca.png";
import repa from "../assets/images/repara.png";
import grabado from "../assets/images/grab.png";
const Servicios = () => {
  return (
    <div>
      {" "}
      <div className="imagen-contenedor">
        <img src={encabezadoImage} alt="encabezado" className="imagen" />
        <div className="div-transparente">
          <h1 className="texto-centrado">NUESTROS SERVICIOS</h1>
          <p>
            Respaldando sus ventas por medio de su personal calificado y
            talleres de servicio actualizados con tecnología de punta.
          </p>
        </div>{" "}
        {/* Div transparente encima de la imagen */}
      </div>
      {/* Agregar dos div en una fila */}
      <div className="fila-de-divs">
        <div className="div1">
          <h3 className="texto-centrado">Reparación de Relojes</h3>
          <p className="parrafo-centrado">
            {" "}
            StoreInfinity se enorgullece en ofrecer un taller especializado en
            la reparación y cuidado de relojes. Nos comprometemos a proporcionar
            los servicios de la más alta calidad para tus valiosos relojes.
            Nuestros relojeros altamente capacitados están dedicados a servirte
            de la mejor manera posible, asegurando la reparación y restauración
            de tus relojes, piezas que sabemos son importantes para ti. Además,
            nuestra limpieza especializada hará que tus relojes luzcan como
            nuevos. Confía en nosotros para mantener y restaurar la belleza y
            funcionalidad de tus relojes, porque sabemos lo valiosos que son
            para ti.
          </p>
        </div>
        <div className="div2">
          <img src={repa} alt="Div2" className="imagen" />
        </div>
      </div>
      <div className="fila-de-divs2">
        <div className="div3">
          <img src={grabado} alt="Div3" className="imagen" />
        </div>
        <div className="div4">
          <h3 className="texto-centrado">Grabado</h3>
          <p className="parrafo-centrado">
            {" "}
            Como valor agregado a nuestros productos contamos con servicio de
            grabado láser que permite personalizar sus piezas. Se proporciona
            servicio en metales, si las condiciones técnicas y el espacio
            disponible lo permiten con un nombre, una frase, una fecha o un
            pequeño dibujo. El grabado es gratuito al realizar su compra en
            nuestras tiendas. Se pueden personalizar bolígrafos, placas,
            bandejas, copas, urnas, entre otras cosas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
