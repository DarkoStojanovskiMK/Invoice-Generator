import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import InvoiceContext from "./InvoiceContext";

const App = () => {
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

  return (
    <InvoiceContext.Provider
      value={{
        // description,
        // setDescription,
        // units,
        // setUnits,
        // unitsPrice,
        // setUnitsPrice,
        // amount,
        // setAmount,
        // GST,
        // setGST,
        invoiceItems,
        setInvoiceItems,
        items,
        setItems,
        deleteItem,
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
