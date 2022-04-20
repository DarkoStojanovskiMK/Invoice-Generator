import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import InvoiceContext from "../InvoiceContext";

const Shipping = () => {
  const { billingCompany, setBillingCompany, yourCompany, setYourCompany } =
    useContext(InvoiceContext);
  useEffect(() => {
    console.log(yourCompany);
  }, [yourCompany]);
  return (
    <Row className="date-invoice">
      <Col xs={12} md={5} className="shipping">
        <div className="invoice-label">BILL/SHIP TO:</div>
        <input
          type="text"
          placeholder="Billing company name"
          className="invoice-input mt-1"
          value={billingCompany.billingName}
          onChange={(e) =>
            setBillingCompany({
              ...billingCompany,
              billingName: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Billing company address"
          className="invoice-input mt-1"
          value={billingCompany.billingAddress}
          onChange={(e) =>
            setBillingCompany({
              ...billingCompany,
              billingAddress: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Additional info"
          className="invoice-input mt-1"
          value={billingCompany.additionalInfo}
          onChange={(e) =>
            setBillingCompany({
              ...billingCompany,
              additionalInfo: e.target.value,
            })
          }
        />
      </Col>
      <Col xs={12} md={5} className="shipping">
        <div className="invoice-label">FROM:</div>
        <input
          type="text"
          placeholder="Your company name"
          className="invoice-input mt-1"
          value={yourCompany.yourName}
          onChange={(e) =>
            setYourCompany({
              ...yourCompany,
              yourName: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Your company address"
          className="invoice-input mt-1"
          value={yourCompany.yourAddress}
          onChange={(e) =>
            setYourCompany({
              ...yourCompany,
              yourAddress: e.target.value,
            })
          }
        />
        <input
          type="text"
          placeholder="Additional info"
          className="invoice-input mt-1"
          value={yourCompany.additionalInfo}
          onChange={(e) =>
            setYourCompany({
              ...yourCompany,
              additionalInfo: e.target.value,
            })
          }
        />
      </Col>
    </Row>
  );
};

export default Shipping;
