import React from "react";
import "./Home.css"
export default function About() {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-dark">
        <span className="botonPortfolio">Contino Giuliano</span>
        <a href="/">
          <button class="btn btn-info btn-sm">Home</button>
        </a>
        <a href="/tech">
          <button class="btn btn-info btn-sm">Mis tecnologias</button>
        </a>

        <a href="https://github.com/Giuliano-627?tab=repositories">
          <button class="btn btn-info btn-sm">Mis proyectos</button>
        </a>
        <a href="/about">
          <button class="btn btn-info btn-sm">Sobre mi</button>
        </a>
        <div className="dropdown">
          <button className="dropbtn">Mis redes</button>
          <div className="dropdown-content">
            <a href="https://github.com/Giuliano-627">Github</a>
            <a href="https://www.linkedin.com/in/giuliano-contino-55246222b/">
              LinkedIn
            </a>
            <a className="" href="mailto:f15ur4.97@gmail.com">
              Enviame un email
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
