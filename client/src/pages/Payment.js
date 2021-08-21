import React from "react";
import PaymentCard from "../components/PaymentCard";
import { Col, Row } from "antd";


function Payment(props) {
  return (
    <Row>
      <Col xs={24}>
        <PaymentCard>
          </PaymentCard>
      </Col>
    </Row>
  );
}

export default Payment;
