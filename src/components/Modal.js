import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import InvoiceContext from "../InvoiceContext";

const Modal = ({ onClick }) => {
  const { items, setItems, invoiceItems, setInvoiceItems } =
    useContext(InvoiceContext);

  useEffect(() => {
    // setItems({ ...items, id: Math.floor(Math.random() * 10000) });
    setItems({
      id: Math.floor(Math.random() * 10000),
      description: "",
      units: 0,
      unitPrice: 0,
      amount: 0,
      GST: 5,
    });
  }, [invoiceItems]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInvoiceItems([
      ...invoiceItems,
      { ...items, amount: (items.units * items.unitPrice).toFixed(2) },
    ]);
  };

  return (
    <Row className="overlay">
      <Row className="modalDiv ">
        <Col>
          <button className="btn-modal-esc" onClick={onClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <h4>Fill your services</h4>
            <hr />
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label className="modal-label">DESCRIPTION</Form.Label>
                  <Form.Control
                    required
                    bsPrefix="modal-input"
                    value={items.description}
                    onChange={(e) =>
                      setItems({
                        ...items,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={9} className="d-flex  mt-3">
                <Form.Group className="formGroup">
                  <Form.Label className="modal-label">UNITS</Form.Label>
                  <Form.Control
                    required
                    bsPrefix="modal-input"
                    value={items.units}
                    onChange={(e) =>
                      setItems({ ...items, units: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="formGroup">
                  <Form.Label className="modal-label">UNIT PRICE</Form.Label>
                  <Form.Control
                    required
                    bsPrefix="modal-input"
                    value={items.unitPrice}
                    onChange={(e) =>
                      setItems({ ...items, unitPrice: e.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="formGroup">
                  <Form.Label className="modal-label">AMOUNT</Form.Label>
                  <Form.Control
                    bsPrefix="modal-input"
                    value={items.units * items.unitPrice}
                    onChange={() =>
                      setItems({
                        ...items,
                        amount: items.units * items.unitPrice,
                      })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4} className="mt-4">
                <Form.Group className="formGroup">
                  <Form.Label className="modal-label">GST</Form.Label>
                  <Form.Select
                    required
                    bsPrefix="modal-input"
                    value={items.GST}
                    onChange={(e) =>
                      setItems({ ...items, GST: e.target.value })
                    }
                  >
                    <option value="5">GST 5%</option>
                    <option value="12">GST 12%</option>
                    <option value="18">GST 18%</option>
                    <option value="28">GST 28%</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-end mt-4">
                <Button className="btn-modal-white" onClick={onClick}>
                  Cancel
                </Button>
                <Button type="submit" className="btn-modal-black">
                  Add Item
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default Modal;
