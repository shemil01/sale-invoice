// frontend/src/components/InvoiceDetails.js
import React, { useState } from "react";

const InvoiceDetails = ({ onDetailsChange }) => {
  const [invoiceDate, setInvoiceDate] = useState("");
  const [stateOfSupply, setStateOfSupply] = useState("");

  const handleChange = () => {
    onDetailsChange({ invoiceDate, stateOfSupply });
  };

  return (
    <div className="pt-10 flex flex-col pr-3 space-y-3">
      <div className="flex space-x-2" >
        <h1>invoice number:</h1>
        <input
          className="bg-transparent border-b-[3px] border-gray-300 focus:outline-none focus:border-blue-500 pb-2 placeholder:text-[#7C7C7C]"
          type="text"
        />
      </div>
      <div className="flex space-x-2">
        <label>Invoice Date:</label>
        <input
          placeholder="Invoice Date"
          type="date"
          onChange={(e) => setInvoiceDate(e.target.value)}
          className="border border-gray-300 rounded py-1 px-3"
        />
      </div>
     <div className="flex space-x-5">
        <label >State of Supply</label>
     <select onChange={(e) => setStateOfSupply(e.target.value)} >
        <option value=""> select</option>
        <option value="State 1 " className="border border-gray-300 rounded py-1 px-3">Kerala</option>
        <option value="State 2"  className="border border-gray-300 rounded py-1 px-3">Tamil Nadu</option>
        <option value="State 2"  className="border border-gray-300 rounded py-1 px-3">Karnataka</option>
        <option value="State 2"  className="border border-gray-300 rounded py-1 px-3">Andra pradhesh</option>
        <option value="State 2"  className="border border-gray-300 rounded py-1 px-3">Tamil Nadu</option>
        <option value="State 2"  className="border border-gray-300 rounded py-1 px-3">Tamil Nadu</option>
        {/* Add more states as needed */}
      </select>
      <button onClick={handleChange}>Save Details</button>
     </div>
    </div>
  );
};

export default InvoiceDetails;
