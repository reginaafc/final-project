import React from "react";
import "../assets/css/Parallax.css";
import Quote from "./img/quote.jpg";

function Parallax(props) {
  return (
    <div
      className="parallax-img"
      style={{
        backgroundImage: `url("${Quote}")`,
      }}
    ></div>
  );
}

export default Parallax;
