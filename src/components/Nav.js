import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </nav>
  );
}

export default Nav;
