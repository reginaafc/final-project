import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function Projects(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <p>Projects</p>

        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Projects;
