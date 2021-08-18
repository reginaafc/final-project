import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function SignUp(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <p>SignUp</p>

        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default SignUp;
