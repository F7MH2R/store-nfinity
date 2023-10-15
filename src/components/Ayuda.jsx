import React, { useState } from "react";
import "./Accordion.css"; // Agrega estilos CSS a tu gusto

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "¿Qué es React?",
      answer:
        "React es una biblioteca de JavaScript para construir interfaces de usuario interactivas.",
    },
    {
      question: "¿Cómo se crea un componente en React?",
      answer:
        "Para crear un componente en React, puedes utilizar una función o una clase que extienda React.Component.",
    },
    {
      question: "¿Qué es el estado en React?",
      answer:
        "El estado es un objeto que contiene datos que pueden cambiar en un componente y provocar una actualización de la interfaz de usuario.",
    },
  ];

  const handleToggle = (index) => {
    if (index === activeIndex) {
      // Si se hace clic en la pregunta que ya está activa, ciérrala
      setActiveIndex(null);
    } else {
      // De lo contrario, abre la pregunta correspondiente
      setActiveIndex(index);
    }
  };

  return (
    <div className="accordion">
      {questionsAndAnswers.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeIndex ? "active" : ""}`}
        >
          <div
            className="accordion-question"
            onClick={() => handleToggle(index)}
          >
            {item.question}
          </div>
          {index === activeIndex && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
