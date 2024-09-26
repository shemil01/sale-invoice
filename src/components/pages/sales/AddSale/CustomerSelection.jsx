import React, { useEffect, useState } from "react";
import { Axios } from "../../MainPage";

const CustomerSelection = ({ onCustomerChange }) => {
  const [customerData, setCustomerData] = useState([]);
  const [customer, setCustomer] = useState({
    companyName: "",
    phoneNumber: "",
    billingAddress: "",
  });
  const [balance, setBalance] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // Fetch existing customers from the backend on component mount
  useEffect(() => {
    Axios.get("/all-customers", {
      withCredentials: true,
    })
      .then((res) => {
        setCustomerData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handle customer selection from dropdown
  const handleCustomerSelect = (event) => {
    const customerId = event.target.value;

    if (customerId === "new") {
      // Clear form to allow adding new customer
      setCustomer({
        companyName: "",
        phoneNumber: "",
        billingAddress: "",
      });
      setBalance(0);
      setSelectedCustomer(customerId); // Set "new" customer
    } else {
      const selectedCustomer = customerData.find((c) => c._id === customerId);
      if (selectedCustomer) {
        setCustomer({
          companyName: selectedCustomer.companyName,
          phoneNumber: selectedCustomer.phoneNumber,
          billingAddress: selectedCustomer.billingAddress || "",
        });
        setBalance(selectedCustomer.balance || 0); // Default balance to 0 if not available
        setSelectedCustomer(customerId); // Set the selected customer ID
      }
    }
  };

  // Handle input changes for new customer
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevState) => ({ ...prevState, [name]: value }));
  };

  // Submit new customer to the backend
  const handleAddNewCustomer = () => {
    if (selectedCustomer === "new") {
      Axios.post("/add-customer", customer, { withCredentials: true })
        .then((res) => {
          setCustomerData([
            ...customerData,
            {
              id: res.data.id, // Use actual new customer ID from response
              companyName: customer.companyName,
              phoneNumber: customer.phoneNumber,
              billingAddress: customer.billingAddress,
              balance: balance,
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Pass customer data and ID to parent
  const handleSubmit = () => {
    // Include the selectedCustomer ID along with customer info
    onCustomerChange({ ...customer, balance, customerId: selectedCustomer });
    
    // If it's a new customer, add them
    handleAddNewCustomer();
  };

  return (
    <div className="pt-10">
      <div className="flex space-x-2">
        {/* Customer Selection */}
        <select
          className="border border-gray-400 py1 px-1 rounded"
          value={selectedCustomer}
          onChange={handleCustomerSelect}
        >
          <option value="">Select Customer</option>
          {customerData.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.companyName}
            </option>
          ))}
          <option value="new">Add New Customer</option>
        </select>

        {/* Conditionally show inputs for both existing and new customers */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            className="border border-gray-400 py-2 px-2 rounded w-full"
            placeholder="Company Name"
            name="companyName"
            value={customer.companyName}
            onChange={handleInputChange}
            disabled={selectedCustomer !== "new"} // Disable for existing customer
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            className="border border-gray-400 py-2 px-2 rounded w-full"
            placeholder="Phone Number"
            name="phoneNumber"
            value={customer.phoneNumber}
            onChange={handleInputChange}
            disabled={selectedCustomer !== "new"} // Disable for existing customer
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Billing Address
          </label>
          <input
            className="border border-gray-400 py-2 px-2 rounded w-full"
            placeholder="Billing Address"
            name="billingAddress"
            value={customer.billingAddress}
            onChange={handleInputChange}
            disabled={selectedCustomer !== "new"} // Disable for existing customer
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Balance
          </label>
          <input
            className="border border-gray-400 py-2 px-2 rounded w-full"
            placeholder="Balance"
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            disabled={selectedCustomer !== "new"} // Disable for existing customer
          />
        </div>

        <button
          className="border border-gray-400 rounded px-2 mt-4"
          onClick={handleSubmit}
        >
          Select Customer
        </button>
      </div>
    </div>
  );
};

export default CustomerSelection;
