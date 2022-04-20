import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import InvoiceContext from "./InvoiceContext";
import axios from "axios";

const App = () => {
  const [invoiceNr, setInvoiceNr] = useState(0);

  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  const [endDate, setEndDate] = useState(new Date().toLocaleDateString());

  const [image, setImage] = useState("");

  const [items, setItems] = useState({
    id: "",
    description: "",
    units: 0,
    unitPrice: 0,
    amount: 0,
    GST: 5,
  });

  const [invoiceItems, setInvoiceItems] = useState([]);
  const deleteItem = (id) => {
    const newItems = invoiceItems.filter((item) => item.id !== id);
    setInvoiceItems(newItems);
  };

  const [billingCompany, setBillingCompany] = useState({
    billingName: "",
    billingAddress: "",
    additionalInfo: "",
  });

  const [yourCompany, setYourCompany] = useState({
    yourName: "",
    yourAddress: "",
    additionalInfo: "",
  });

  const printInvoice = (allData) => async () => {
    try {
      await axios.post("/", allData);
      console.log("success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <InvoiceContext.Provider
      value={{
        printInvoice,
        image,
        setImage,
        invoiceNr,
        setInvoiceNr,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        invoiceItems,
        setInvoiceItems,
        items,
        setItems,
        deleteItem,
        billingCompany,
        setBillingCompany,
        yourCompany,
        setYourCompany,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    </InvoiceContext.Provider>
  );
};

export default App;
