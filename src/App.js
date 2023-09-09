import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </nav>
  );
}

export default App;
