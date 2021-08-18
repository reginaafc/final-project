import React from "react";
import "../assets/css/Imagen.css";
import Hands from "./img/hands.jpeg"
import Homeless from "./img/homeless.jpeg"
import Alms from "./img/alms.jpeg"

function Imagen(props) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 h-40"
            src= {Hands}
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img 
          className="d-block w-100" 
          src= {Homeless}
          alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img 
          className="d-block w-100" 
          src= {Alms}
          alt="Third slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Imagen;
