import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="campo">
          <label htmlFor="name">Ingresa tu nombre Completo</label>
          <input type="text" id="name" placeholder="Nombre-Apellidos" />
        </div>
        <div className="campo">
          <label htmlFor="email">Ingresa tu nombre Completo</label>
          <input type="email" id="email" placeholder="correo@correo.com" />
        </div>
      </form>
    </>
  );
};

export default Form;
