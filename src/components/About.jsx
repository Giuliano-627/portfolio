import React from "react";
import "./About.css";
export default function About({ show }) {
  if (show === true) {
    return (
      <div className="divAbout">
        <div className="contenedor">
          <div>
            <a href="/" className="equis">
              X
            </a>
          </div>
          <h2>
            Soy un joven proactivo, organizado y responsable, me considero
            resolutivo y me gustan los desafíos.
          </h2>
          <h2>
            Siempre estoy dispuesto a crecer como profesional, me gusta trabajar
            en equipo, autentica vocación por la lógica de programación.
          </h2>
          <h2>
            Gran capacidad de adaptación al trabajo en equipo, para diferentes
            entornos y necesidades.
          </h2>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
