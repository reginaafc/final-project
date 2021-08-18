import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Datos from "../components/Datos";
import Imagen from "../components/Imagen";
import Info from "../components/Info";
import Parallax from "../components/Parallax";
import Footer from "../components/Footer";




function Dashboard(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <Imagen></Imagen>
        <Datos></Datos>
        <Info></Info>
        <Parallax></Parallax>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Dashboard;
