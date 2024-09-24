// frontend/src/components/InvoiceSummary.js
import React from 'react';

const InvoiceSummary = ({ items }) => {
    const totalAmountWithoutTax = items.reduce((total, item) => {
        const amount = item.unitPrice * item.quantity;
        const discount = (amount * item.discountPercentage) / 100;
        const tax = (amount * item.taxPercentage) / 100;
        return total + (amount - discount + tax);
    }, 0);

    const roundOffAmount = Math.round(totalAmountWithoutTax) - totalAmountWithoutTax;

    return (
        <div>
            <h2>Invoice Summary</h2>
            <p>Total Amount Without Tax: {totalAmountWithoutTax.toFixed(2)}</p>
            <p>Round-off Amount: {roundOffAmount.toFixed(2)}</p>
            <p>Final Total Amount: {(totalAmountWithoutTax + roundOffAmount).toFixed(2)}</p>
        </div>
    );
};

export default InvoiceSummary;
