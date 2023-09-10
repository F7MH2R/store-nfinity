// Contact.js
import React from "react";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h2>Contacto</h2>
      {/* Contenido de la página de contacto */}
      <li>
        <Link to="/">Volver</Link>
      </li>
    </div>
  );
}

export default Contact;
