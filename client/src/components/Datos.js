import React from "react";
import "../assets/css/Datos.css";

function Datos(props) {
  return (
    <section className="containerr">
      <div className="row">
          <div className="col b">1,314</div>
          <div className="col b">3,190</div>
          <div className="col b">175+</div>
          <div className="col b">338</div>
        </div>

        <div className="row">
          <div className="col s">donors</div>
          <div className="col s">projects</div>
          <div className="col s">countries</div>
          <div className="col s">companies</div>
        </div>
    </section>
  );
}

export default Datos;
