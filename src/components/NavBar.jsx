import React from "react";
import "./Home.css";
import Swal from "sweetalert2";

export default function Navbar() {
  function showAbout(e){
    e.preventDefault();
    Swal.fire({
      title: "<strong>Hola!</strong>",
      html:
        "<h2>Soy un joven proactivo, organizado y responsable, me considero resolutivo y me gustan los desafíos. </h2>" +
        "<h2>Siempre estoy dispuesto a crecer como profesional, me gusta trabajar en equipo, autentica vocación por la lógica de programación.</h2>" +
        "<h2>Gran capacidad de adaptación al trabajo en equipo, para diferentes entornos y necesidades.</h2>",
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    })
  }
  return (
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
      <div>
        <button
          class="btn btn-info btn-sm"
          onClick={e=>showAbout(e)}
        >
          Sobre mi
        </button>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Mis redes</button>
        <div className="dropdown-content">
          <a href="https://github.com/Giuliano-627">Github</a>
          <a href="https://www.linkedin.com/in/giuliano-contino-55246222b/">
            LinkedIn
          </a>
          <a className="" href="mailto:f15ur4.97@gmail.com">
            Email
          </a>
        </div>
      </div>
    </nav>
  );
}
