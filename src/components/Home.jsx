import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-dark" >
        <span className="botonPortfolio">
        Mi Portfolio
        </span>
        <button class="btn btn-info btn-sm">Sobre mi</button>
        <a href="https://github.com/Giuliano-627?tab=repositories">
          <button class="btn btn-info btn-sm">Mis proyectos</button>
        </a>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="https://github.com/Giuliano-627">Github</a>
            <a href="https://www.linkedin.com/in/giuliano-contino-55246222b/">
              LinkedIn
            </a>
            <a className="" href="mailto:f15ur4.97@gmail.com">Enviame un email</a>
          </div>
        </div>
      </nav>
      <h1>ESTE PORTFOLIO AUN SE ENCUENTRA EN CONSTRUCCION</h1>
    </div>
  );
}
