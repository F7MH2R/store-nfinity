// Contact.js
import Form from "./Form";
import "../styles/Contact.css";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import whatssap from "../assets/images/whatssap.png";
import twitter from "../assets/images/twitter.png";

function Contact() {
  return (
    <div className="contact">
      <section className="formulario">
        <Form />
      </section>
      <section className="redesC">
        <h2>Contactanos</h2>
        <p>
          Si tienes alguna duda o consulta sobre alguno de nuestros productos
          puedes visitarnos en alguna de nuestras redes sociales y comentarnos
          lo que desees, sino tambien puedes enviar un mensaje directo a nuestro
          correo llenando el formulario.
        </p>
        <div className="redContacto">
          <div className="primerasRed">
            <img src={instagram} alt="imagen de red social"></img>
            <img src={facebook} alt="imagen de red social" />
          </div>
          <div className="primerasRed">
            <img src={whatssap} alt="imagen de red social" />
            <img src={twitter} alt="imagen de red social" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
