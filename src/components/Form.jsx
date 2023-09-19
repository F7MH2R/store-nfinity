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
          <label htmlFor="email">Ingresa tu correo electrónico</label>
          <input type="email" id="email" placeholder="correo@correo.com" />
        </div>
        <div className="campo">
          <label htmlFor="tel">Ingresa tu telefono</label>
          <input type="text" id="tel" placeholder="0000-0000" />
        </div>

        <div className="campo">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            placeholder="Escribe tu mensaje aquí"
          ></textarea>
        </div>
        {/* Puedes agregar más campos aquí si es necesario */}

        {/* Botón de envío del formulario */}
        <div className="campo">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};

export default Form;
