import { useState } from "react";
import CustomerSelection from "../CustomerSelection";
import BillingAddress from "../BillingAddress";
import InvoiceDetails from "./InvoiceDetails";
import ItemsEntry from "./ItemEntry";
import InvoiceSummary from "./InvoiceSummary";

const AddSale = () => {
  const [customer, setCustomer] = useState({});
  const [billingAddress, setBillingAddress] = useState(""); // Set this based on customer selection
  const [invoiceDetails, setInvoiceDetails] = useState({});
  const [items, setItems] = useState([]);

  return (
    <div className="pl-5 ">
      <header>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <CustomerSelection onCustomerChange={setCustomer} />

            <BillingAddress address={billingAddress} />
          </div>

          <InvoiceDetails onDetailsChange={setInvoiceDetails} />
        </div>
      </header>
      <div>

      <ItemsEntry onItemsChange={setItems} />

      </div>
      {/* <div></div>
      <InvoiceSummary items={items} /> */}
    </div>
  );
};

export default AddSale;
