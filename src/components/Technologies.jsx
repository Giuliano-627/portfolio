import React, { Fragment } from "react";
import Navbar from "./NavBar";
import "./Technologies.css";
import cssIco from "../resources/css3Icon.png";
import htmlIco from "../resources/html5Icon.png";
import jsIco from "../resources/jsIcon.png";
import nodeIco from "../resources/nodejsIcon.png";
import reactIco from "../resources/reactIcon.png";
import reduxIco from "../resources/reduxIcon.png";
import sqlIco from "../resources/sqlIcon.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Technologies() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const techs = [
    {
      name: "Javascript",
      img: jsIco,
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "HTML",
      img: htmlIco,
      link: "https://en.wikipedia.org/wiki/HTML",
    },
    {
      name: "CSS",
      img: cssIco,
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "NODE",
      img: nodeIco,
      link: "https://en.wikipedia.org/wiki/Node.js",
    },
    {
      name: "REACT",
      img: reactIco,
      link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
    },
    {
      name: "REDUX",
      img: reduxIco,
      link: "https://en.wikipedia.org/wiki/Redux_(JavaScript_library)",
    },
    {
      name: "SQL",
      img: sqlIco,
      link: "https://en.wikipedia.org/wiki/SQL",
    },
  ];
  return (
    <div>
      <Navbar />
      <Slider {...settings}>
        {techs.map((e) => (
          <div className="card">
            <div className="card-top">
              <img src={e.img} alt="imagen" width="250px" height="230px" className="imag"/>
            </div>
            <div className="card-bottom">
              <h2 className="name">{e.name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
