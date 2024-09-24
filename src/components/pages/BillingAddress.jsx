// frontend/src/components/BillingAddress.js
import React from 'react';

const BillingAddress = ({ address }) => {
    return (
        <div>
            <h2>Billing Address</h2>
            <p>{address}</p>
        </div>
    );
};

export default BillingAddress;
