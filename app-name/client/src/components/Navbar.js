import React from "react";
import "../assets/css/Navbar.css";
import {LoginOutlined} from "@ant-design/icons";
import {GiftOutlined} from "@ant-design/icons";
import {HomeOutlined} from "@ant-design/icons";
import { Route} from "react-router-dom";

import headerImg from "./img/logo512.png";




function Navbar(props) {
  return (
    <ul className="header">
      <img className="img" src={headerImg} alt="header"/>
      <h1 className="tituloHeader">Final-project</h1>
      <div>
      <a href='/' className="buttonn"><HomeOutlined/></a>
      <a href='/createpost' className="buttonn"><GiftOutlined/></a>
      <a href='/postdetail' className="buttonn"><LoginOutlined /></a>
      </div>
    </ul>
  );
}


export default Navbar;
