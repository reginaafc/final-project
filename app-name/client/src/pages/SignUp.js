import React from "react";
import "antd/dist/antd.css";
import { Col, Row } from "antd";
import SignupForm from "../components/SignupForm";

function SignUp(props) {
  return (
    <Row>
      <Col xs={24}>
        <SignupForm></SignupForm>
      </Col>
    </Row>
  );
}

export default SignUp;
