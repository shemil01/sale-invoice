import React, { useState } from 'react';
import { Axios } from './MainPage';


const CustomerSelection = ({ onCustomerChange }) => {
    const [customer, setCustomer] = useState({
        companyName: '',
        phoneNumber: ''
    });
    const [balance, setBalance] = useState(0);
    const [existingCustomers, setExistingCustomers] = useState([
        { id: 1, name: 'Customer A', phone: '123-456-7890', balance: 100 },
        { id: 2, name: 'Customer B', phone: '098-765-4321', balance: 200 },
    ]);
    const [selectedCustomer, setSelectedCustomer] = useState('');

    // Handle customer selection from dropdown
    const handleCustomerSelect = (event) => {
        const customerId = event.target.value;
        if (customerId === "new") {
            // Clear form to allow adding new customer
            setCustomer({ companyName: '', phoneNumber: '' });
            setBalance(0);
            setSelectedCustomer(customerId);
        } else {
            const customer = existingCustomers.find(c => c.id === parseInt(customerId));
            if (customer) {
                setCustomer({ companyName: customer.name, phoneNumber: customer.phone });
                setBalance(customer.balance);
                setSelectedCustomer(customerId);
            }
        }
    };

    // Handle input changes for new customer
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer(prevState => ({ ...prevState, [name]: value }));
    };

    // Submit new customer to the backend
    const handleAddNewCustomer = () => {
        if (selectedCustomer === "new") {
            Axios.post('/add-customer', customer, { withCredentials: true })
                .then((res) => {
                    console.log(res);
                    // Optionally update the existingCustomers list if needed
                    setExistingCustomers([...existingCustomers, {
                        id: existingCustomers.length + 1, // Temporary new ID
                        name: customer.companyName,
                        phone: customer.phoneNumber,
                        balance: balance
                    }]);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleSubmit = () => {
        // Use customer info to submit selection
        onCustomerChange({ ...customer, balance });
        handleAddNewCustomer();
    };

    return (
        <div className='space-x-5 pt-10'>
            <select
                className='border border-gray-400 py-2 px-2 rounded'
                value={selectedCustomer}
                onChange={handleCustomerSelect}
            >
                <option value="">Select Customer</option>
                {existingCustomers.map(customer => (
                    <option key={customer.id} value={customer.id}>{customer.name}</option>
                ))}
                <option value="new">Add New Customer</option>
            </select>

            <input
                className='border border-gray-400 py-2 px-2 rounded'
                placeholder="Company Name"
                name="companyName"
                value={customer.companyName}
                onChange={handleInputChange}
                disabled={selectedCustomer !== 'new'} // Disable if existing customer is selected
            />
            <input
                className='border border-gray-400 py-2 px-2 rounded'
                placeholder="Phone Number"
                name="phoneNumber"
                value={customer.phoneNumber}
                onChange={handleInputChange}
                disabled={selectedCustomer !== 'new'} // Disable if existing customer is selected
            />
            <input
                className='border border-gray-400 py-2 px-2 rounded'
                placeholder="Balance"
                type="number"
                value={balance}
                onChange={e => setBalance(e.target.value)}
            />

            <button className='bg-white' onClick={handleSubmit}>Select Customer</button>
        </div>
    );
};

export default CustomerSelection;
