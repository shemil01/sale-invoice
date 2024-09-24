import React, { useState, useEffect } from 'react';

const ItemsEntry = ({ onItemsChange }) => {
    const [items, setItems] = useState([]);

    // Add a new item to the list
    const addItem = () => {
        const item = {
            itemName: '',
            quantity: 1,
            unitPrice: 0,
            discountPercentage: 0,
            taxPercentage: 0,
            totalBeforeTax: 0,
            totalAfterTax: 0,
        };
        setItems([...items, item]);
    };

    // Handle changes to item fields and update the calculated values
    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;

        // Calculate total before and after tax when quantity, unitPrice, discount, or tax changes
        const unitPrice = parseFloat(newItems[index].unitPrice || 0);
        const quantity = parseInt(newItems[index].quantity || 1);
        const discount = parseFloat(newItems[index].discountPercentage || 0);
        const tax = parseFloat(newItems[index].taxPercentage || 0);

        // Calculate the discount amount and total before tax
        const discountAmount = (unitPrice * quantity * discount) / 100;
        const totalBeforeTax = (unitPrice * quantity) - discountAmount;

        // Calculate tax and total after tax
        const taxAmount = (totalBeforeTax * tax) / 100;
        const totalAfterTax = totalBeforeTax + taxAmount;

        newItems[index].totalBeforeTax = totalBeforeTax.toFixed(2); // Rounded to 2 decimals
        newItems[index].totalAfterTax = totalAfterTax.toFixed(2);   // Rounded to 2 decimals

        setItems(newItems);
        onItemsChange(newItems); // Pass updated items to parent component
    };

    return (
        <div >
            <h2>Items Entry</h2>
            {items.map((item, index) => (
                <div key={index} className='space-x-3'>
                    <input
                        placeholder="Item Name"
                        onChange={e => handleItemChange(index, 'itemName', e.target.value)}
                        className='border border-gray-200 px-2 py-1 rounded'
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={item.quantity}
                        onChange={e => handleItemChange(index, 'quantity', e.target.value)}
                        className='border border-gray-200 px-2 py-1 rounded'
                    />
                    <input
                        type="number"
                        placeholder="Unit Price"
                        value={item.unitPrice}
                        onChange={e => handleItemChange(index, 'unitPrice', e.target.value)}
                        className='border border-gray-200 px-2 py-1 rounded'
                    />
                    <input
                        type="number"
                        placeholder="Discount (%)"
                        value={item.discountPercentage}
                        onChange={e => handleItemChange(index, 'discountPercentage', e.target.value)}
                        className='border border-gray-200 px-2 py-1 rounded'
                    />
                    <input
                        type="number"
                        placeholder="Tax (%)"
                        value={item.taxPercentage}
                        onChange={e => handleItemChange(index, 'taxPercentage', e.target.value)}
                        className='border border-gray-200 px-2 py-1 rounded'
                    />
                    
                    {/* Display Calculated Totals */}
                    <div className='border border-gray-200 px-2 py-1 rounded'>
                        <p>Total Before Tax: ${item.totalBeforeTax}</p>
                        <p>Total After Tax: ${item.totalAfterTax}</p>
                    </div>
                </div>
            ))}
            <button onClick={addItem} className='mt-3 bg-blue-500 text-white px-3 py-2 rounded'>Add Item</button>
        </div>
    );
};

export default ItemsEntry;
