import React from "react";
import "../assets/css/Datos.css";

function Datos(props) {
  return (
    <section className="containerr">
      <div class="row">
          <div class="col b">1,314</div>
          <div class="col b">3,190</div>
          <div class="col b">175+</div>
          <div class="col b">338</div>
        </div>

        <div class="row">
          <div class="col s">donors</div>
          <div class="col s">projects</div>
          <div class="col s">countries</div>
          <div class="col s">companies</div>
        </div>
    </section>
  );
}

export default Datos;
