import React, { useRef, useContext } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import DateInvoice from "./components/DateInvoice";
import Shipping from "./components/Shipping";
import Description from "./components/Description";
import { useReactToPrint } from "react-to-print";

const HomeScreen = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Container ref={componentRef}>
      <Header handlePrint={handlePrint} />
      <DateInvoice />
      <Shipping />
      <Description />
    </Container>
  );
};

export default HomeScreen;
