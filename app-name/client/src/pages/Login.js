import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import LoginForm from "../components/LoginForm";



function Login(props) {
  return (
    <Row>
      <Col xs={24}>
        <LoginForm>
          </LoginForm>
        
      </Col>
    </Row>
  );
}

export default Login;
