import React from "react";
import "../assets/css/Navbar.css";
import {LoginOutlined} from "@ant-design/icons";
import {GiftOutlined} from "@ant-design/icons";
import {HomeOutlined} from "@ant-design/icons";
import { Route} from "react-router-dom";




function Navbar(props) {
  return (
    <ul className="header">
      <img className="img" src="./icon/logo512.png" />
      <h1 className="tituloHeader">Final-project</h1>
      <div>
      <a href='/' className="buttonn"><HomeOutlined/></a>
      <a href='/projects' className="buttonn"><GiftOutlined/></a>
      <a href='/login' className="buttonn"><LoginOutlined /></a>
      </div>
    </ul>
  );
}


export default Navbar;
