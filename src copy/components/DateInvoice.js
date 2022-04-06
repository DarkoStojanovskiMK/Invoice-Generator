import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";

const DateInvoice = () => {
  const todayDate = new Date().toString().slice(0, 15);
  const refInput = useRef(null);
  const [image, setImage] = useState("");
  const onClick = () => {
    refInput.current.click();
  };

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(files[0]);
    }
  };

  return (
    <Row className="date-invoice">
      <Col xs={6} md={6} lg={4} className="invoice-date">
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">INVOICE NR</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="invoice-input"
              type="text"
              placeholder={new Date().getMilliseconds()}
            />
          </Col>
        </Row>
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">INVOICE DATE</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="invoice-input"
              type="text"
              placeholder={todayDate}
            />
          </Col>
        </Row>
        <Row className="invoice-date-input">
          <Col className="invoice-date-div">
            <div className="invoice-label">DUE DATE</div> <span>:</span>
          </Col>
          <Col>
            <input
              className="invoice-input"
              type="text"
              placeholder={todayDate}
            />
          </Col>
        </Row>
      </Col>
      <Col xs={6} md={4} className="d-flex justify-content-end mt-2">
        <div className="invoice-pic-div">
          {image && (
            <img
              className="imgAvatar"
              src={URL.createObjectURL(image)}
              alt=""
              style={{ zIndex: "1" }}
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
