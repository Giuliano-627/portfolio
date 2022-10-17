import React from "react";
import "./Cards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Card({ img, techName, linkToTech }) {
  return (
    <div className="card">
      <div className="card-top">
        <a href={linkToTech}>
          <img src={img} alt="imagen" width="256px" height="256px" />
        </a>
      </div>
      <div className="card-bottom">
        <h2 className="name">{techName}</h2>
      </div>
    </div>
  );
}
