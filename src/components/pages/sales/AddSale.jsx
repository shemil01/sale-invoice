import React, { useState } from "react";
import { Axios } from "../MainPage";
import CustomerSelection from "./AddSale/CustomerSelection";
import InvoiceDetails from "./AddSale/InvoiceDetails";
import ItemsEntry from "./AddSale/ItemEntry";
import InvoiceSummary from "./AddSale/InvoiceSummary";

const AddSale = () => {
  const [customer, setCustomer] = useState({});
  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [items, setItems] = useState([]);
  const [invoiceSummary, setInvoiceSummary] = useState(null);
  const [isClick, setIsClick] = useState(false);

  // Function to handle customer change
  const handleCustomerChange = (selectedCustomer) => {
    setCustomer(selectedCustomer);
  };

  // Function to handle invoice details change
  const handleInvoiceDetailsChange = (details) => {
    setInvoiceDetails(details);
  };

  // Function to handle items change
  const handleItemsChange = (updatedItems) => {
    setItems(updatedItems);
  };

  // Submit the entire invoice data to the backend
  const handleSubmitInvoice = () => {
    const invoiceData = {
      customer,
      invoiceDetails,
      items,
    };

    Axios.post("/create-invoice", invoiceData, { withCredentials: true })
      .then((response) => {
        console.log("Invoice created successfully:", response.data);
        setInvoiceSummary(response.data);
        // Optionally handle success response, like redirecting or clearing the form
      })
      .catch((error) => {
        console.error("Error creating invoice:", error);
      });
  };

  const handleGetSummary = () => {
    setIsClick(true);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Create Invoice</h1>

      {/* Step 1: Customer Selection */}
      <CustomerSelection onCustomerChange={handleCustomerChange} />

      {/* Step 2: Invoice Details */}
      <InvoiceDetails onDetailsChange={handleInvoiceDetailsChange} />

      {/* Step 3: Items Entry */}
      <ItemsEntry onItemsChange={handleItemsChange} />

      {/* Step 4: Invoice Summary */}
      {/**/}
      {isClick && <InvoiceSummary invoiceSummary={invoiceSummary} />}

      {/* Submit Button */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={handleSubmitInvoice}
          className="mt-5 bg-green-500 w-40 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Submit Invoice
        </button>
        <button
          className="w-40 bg-blue-600 py-1 px-2 rounded text-white"
          onClick={handleGetSummary}
        >
          Get summary
        </button>
      </div>
    </div>
  );
};

export default AddSale;
