import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Modal from "./Modal";
import InvoiceContext from "../InvoiceContext";
import NewItem from "./NewItem";

const Description = () => {
  const [showModal, setShowModal] = useState(false);
  const { invoiceItems } = useContext(InvoiceContext);
  const [currency, setCurrency] = useState();
  const seeModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log("invoice items");
  }, [invoiceItems]);

  const allAmount = invoiceItems.reduce(
    (cumm, item) => Number(item.amount) + cumm,
    0
  );

  const gst = ((allAmount / 100) * 18).toFixed(2);
  return (
    <>
      {showModal && <Modal onClick={seeModal} />}
      <Row className=" date-invoice">
        <Col sm={4} lg={7} xl={4} style={{ paddingRight: "1rem" }}>
          <div className="invoice-label">DESCRIPTION</div>
        </Col>
        <Col sm={8} lg={5} xl={4} className="d-flex">
          <Col xs={10} className="d-flex justify-content-end">
            <div className="unitsDivLabel">
              <div className="invoice-label">UNITS</div>
            </div>
            <div className="unitsDivLabel">
              <div className="invoice-label">UNIT PRICE</div>
              <p className="unitsSubtext">(Incl. GST)</p>
            </div>
            <div className="unitsDivLabel">
              <div className="invoice-label">AMOUNT</div>
              <p className="unitsSubtext">(Incl. GST)</p>
            </div>
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
            <div className="unitsDivLabel"></div>
          </Col>
        </Col>
      </Row>
      <hr />
      {invoiceItems.map((item, index) => {
        const { description, units, unitPrice, amount, GST, id } = item;

        return (
          <NewItem
            id={id}
            key={index}
            description={description}
            units={units}
            unitPrice={unitPrice}
            amount={amount}
            GST={GST}
          />
        );
      })}
      <Row>
        <Col>
          <button className="invoiceBtn" onClick={seeModal}>
            Add Invoice Items
          </button>
        </Col>
      </Row>
      <Row className="d-flex justify-content-end mt-4">
        <Col xs={12} md={4}>
          <Row className="d-flex justify-content-between">
            <Col xs={6}>
              <div>Total incl. GST</div>
              <div className="amountGST">GST(18%) incl. in Total</div>
            </Col>
            <Col xs={6} className="d-grid justify-content-end">
              <div>
                {currency}
                {allAmount.toFixed(2)}
              </div>
              <div className="amountGST">
                {currency}
                {gst}
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col className="d-flex align-items-center">
              <div className="currencyLabel">Currency</div>
              <select
                className="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option></option>
                <option value="&#8364;">
                  <span>&#8364;</span>
                </option>
                <option value="&#36;">
                  <span>&#36;</span>
                </option>
                <option value="&#163;">
                  <span>&#163;</span>
                </option>
                <option value="&#165;">
                  <span>&#165;</span>
                </option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-between">
              <h5>Amount due</h5>
              <div>
                <span>{currency}</span>
                {allAmount.toFixed(2)}
              </div>
            </Col>
          </Row>
        </Col>
        <hr />
      </Row>
    </>
  );
};

export default Description;