import React from "react";
import "./Greetings.css";
import { Result, Button } from 'antd';
import { Link } from "react-router-dom";


function Greetings(props) {
  return (
    <div>

      <Result
        status="success"
        title="Successful Donation!"
        subTitle="Order number: 2017182818828182881"
        extra={[

          <Button type="primary" key="console">
            Home Page
          </Button>,

          <Button key="buy">View more projects</Button>,
        ]}
      />,
    </div>
  );
}


export default Greetings;
