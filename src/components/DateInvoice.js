import React, { useState, useEffect, useRef, useContext } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import InvoiceContext from "../InvoiceContext";

const DateInvoice = () => {
  const {
    image,
    setImage,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    invoiceNr,
    setInvoiceNr,
  } = useContext(InvoiceContext);

  // -------------------------image-----------------------------------
  const refInput = useRef(null);

  const onClick = () => {
    refInput.current.click();
  };

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
    }
  };
  // --------------------------image-------------------------------------

  return (
    <Row className="date-invoice">
      <Col xs={8} md={6} lg={5} className="invoice-date">
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">INVOICE NR</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="date-invoice-input"
              type="text"
              value={invoiceNr}
              onChange={(e) => setInvoiceNr(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">INVOICE DATE</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="date-invoice-input"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">DUE DATE</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="date-invoice-input"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={4} md={5} className="d-flex justify-content-end mt-2">
        <div className="invoice-pic-div">
          {image && (
            <img
              className="imgAvatar"
              src={URL.createObjectURL(image)}
              alt=""
              style={{ zIndex: "4" }}
            />
          )}
          <div className="divCamera">
            <input
              type="file"
              ref={refInput}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <Button
              className="btn-custom"
              onClick={onClick}
              style={{ boxShadow: "none" }}
            >
              <img className="imgCamera" src="\icons\camera.svg" alt="" />
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default DateInvoice;
