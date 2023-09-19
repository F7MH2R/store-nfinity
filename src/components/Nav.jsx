import React, { useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import menu_hamburguer from "../assets/images/menu.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo_nav">
        <img src={logo} alt="logo de la empresa" />
        <h2>StoreInfinty</h2>
      </div>
      <div className={`enlaces_nav ${menuOpen ? "active" : ""}`}>
        <Link className="enlace" to="/Home">
          Inicio
        </Link>
        <Link className="enlace" to="/contacto">
          contacto
        </Link>
        <Link className="enlace" to="/contacto">
          ¿Quienes somos?
        </Link>
        <Link className="enlace" to="/contacto">
          Servicios
        </Link>
      </div>
      <div className="menu_nav">
        <img onClick={toggleMenu} src={menu_hamburguer} alt="menú" />
      </div>
    </nav>
  );
}

export default Nav;
