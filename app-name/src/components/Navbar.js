import React from "react";
import "../assets/css/Navbar.css";
import {LoginOutlined} from "@ant-design/icons";
import {GiftOutlined} from "@ant-design/icons";


function Navbar(props) {
  return (
    <ul className="header">
      <img className="img" src="./icon/logo512.png" />
      <h1 className="tituloHeader">Final-project</h1>
      <div>
      <button className="button"><GiftOutlined/></button>
      <button className="button"><LoginOutlined /></button>
      </div>
    </ul>
  );
}

export default Navbar;
