import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import InvoiceContext from "../InvoiceContext";

const NewItem = ({ description, units, unitPrice, amount, GST, id }) => {
  const { deleteItem } = useContext(InvoiceContext);

  return (
    <Row className="new-date-invoice">
      <Col xs={12} sm={3} lg={7} xl={4} className=" new-item-desc-col ">
        {description}
      </Col>
      <Col
        xs={12}
        sm={9}
        lg={5}
        xl={5}
        className="d-flex  align-items-center justify-content-end "
      >
        <Col xs={10} className="d-flex justify-content-end unit-col">
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
      <hr />
    </Row>
  );
};

export default NewItem;
