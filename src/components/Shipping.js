import React from "react";
import { Row, Col } from "react-bootstrap";

const Shipping = () => {
  return (
    <Row className="date-invoice">
      <Col xs={12} md={5} className="shipping">
        <div className="invoice-label">BILL/SHIP TO:</div>
        <input
          type="text"
          placeholder="Billing company name"
          className="invoice-input mt-1"
        />
        <input
          type="text"
          placeholder="Billing company address"
          className="invoice-input mt-1"
        />
        <input
          type="text"
          placeholder="Additional info"
          className="invoice-input mt-1"
        />
      </Col>
      <Col xs={12} md={5} className="shipping">
        <div className="invoice-label">FROM:</div>
        <input
          type="text"
          placeholder="Your company name"
          className="invoice-input mt-1"
        />
        <input
          type="text"
          placeholder="Your company address"
          className="invoice-input mt-1"
        />
        <input
          type="text"
          placeholder="Additional info"
          className="invoice-input mt-1"
        />
      </Col>
    </Row>
  );
};

export default Shipping;
