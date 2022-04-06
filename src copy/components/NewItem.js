import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import InvoiceContext from "../InvoiceContext";

const NewItem = ({ description, units, unitPrice, amount, GST, id }) => {
  const { deleteItem } = useContext(InvoiceContext);

  return (
    <Row className="mt-2 date-invoice  ">
      <Col sm={4} lg={7} xl={4} style={{ paddingRight: "1rem" }}>
        {description}
      </Col>
      <Col sm={8} lg={5} xl={4} className="d-flex">
        <Col xs={10} className="d-flex justify-content-end">
          <div className="unitDiv">{units}</div>
          <div className="unitDiv">{unitPrice}</div>
          <div className="unitDiv">{amount}</div>
        </Col>
        <Col xs={2} className="d-flex justify-content-end">
          <div onClick={() => deleteItem(id)} className="unitDelete">
            Delete
          </div>
        </Col>
      </Col>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Row>
  );
};

export default NewItem;
