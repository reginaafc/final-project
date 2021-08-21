import React from "react";
import "../assets/css/Navbar.css";
import { LoginOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";
import { GiftOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";

import headerImg from "./img/logo512.png";

function Navbar(props) {
  return (
    <ul className="header">
      <Link to="/">
        <img className="img" src={headerImg} alt="header" />
      </Link>

      <h1 className="tituloHeader">Final-project</h1>
      <div>
        <a href="/userprojects" className="buttonn">
          <HomeOutlined />
        </a>
        <a href="/projects" className="buttonn">
          <GiftOutlined />
        </a>
        {Auth.loggedIn() ? (
          <a href="/" className="buttonn" onClick={Auth.logout}>
            <LogoutOutlined />
          </a>
        ) : (
          <a href="/login" className="buttonn">
            <LoginOutlined />
          </a>
        )}
      </div>
    </ul>
  );
}

export default Navbar;
