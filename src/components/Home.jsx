import React from "react";
import About from "./About";
import "./Home.css";
import Navbar from "./NavBar";
import { useSelector } from "react-redux";
export default function Home() {
  const estado = useSelector(state=>state.show)
  console.log(estado)
  return (
    <div>
      <Navbar/>
      <h1>ESTE PORTFOLIO AUN SE ENCUENTRA EN CONSTRUCCION</h1>
      <div>
      <About show={estado} />
      </div>
    </div>
  );
}
