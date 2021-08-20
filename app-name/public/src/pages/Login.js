import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";


function Login(props) {
  return (
    <Row>
      <Col xs={24}>
        <Navbar></Navbar>
        <LoginForm></LoginForm>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default Login;
