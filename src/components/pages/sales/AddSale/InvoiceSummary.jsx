import React from "react";

const InvoiceSummary = ({ invoiceSummary }) => {
  // Helper to calculate the total per item with discount and tax
  const calculateItemTotal = (item) => {
    const discountAmount = (item.unitPrice * item.discountPercentage) / 100;
    const discountedPrice = item.unitPrice - discountAmount;
    const taxAmount = (discountedPrice * item.taxPercentage) / 100;
    return (discountedPrice + taxAmount) * item.quantity;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Invoice</h1>

      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Invoice Number:</h2>
          <p>{invoiceSummary.invoiceNumber}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Date:</h2>
          <p>{new Date(invoiceSummary.invoiceDate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Customer Information:</h2>
        <p>{invoiceSummary.customer}</p>
      </div>

      <table className="min-w-full table-auto mb-6 border-collapse border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Item Name</th>
            <th className="px-4 py-2 border">Quantity(Kg)</th>
            <th className="px-4 py-2 border">Unit Price</th>
            <th className="px-4 py-2 border">Discount (%)</th>
            <th className="px-4 py-2 border">Tax (%)</th>
            <th className="px-4 py-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceSummary.items.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{item.itemName}</td>
              <td className="px-4 py-2 border">{item.quantity}.kg</td>
              <td className="px-4 py-2 border">₹{item.unitPrice.toFixed(2)}</td>
              <td className="px-4 py-2 border">{item.discountPercentage}%</td>
              <td className="px-4 py-2 border">{item.taxPercentage}%</td>
              <td className="px-4 py-2 border">
              ₹{calculateItemTotal(item).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Total Tax:</h2>
          <p>₹{invoiceSummary.totalTax.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Total Amount:</h2>
          <p>₹{invoiceSummary.totalAmount.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-semibold">Round Off:</h2>
          <p>₹{invoiceSummary.roundOff.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Final Amount:</h2>
          <p className="text-2xl font-bold">₹{invoiceSummary.finalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceSummary;
