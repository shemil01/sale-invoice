import { useState } from "react";
import CustomerSelection from "./components/pages/CustomerSelection";
import BillingAddress from "./components/pages/BillingAddress";
import InvoiceDetails from "./components/pages/sales/InvoiceDetails";
import ItemsEntry from "./components/pages/sales/ItemEntry";
import InvoiceSummary from "./components/pages/sales/InvoiceSummary";
import AddSale from "./components/pages/sales/AddSale";
import MainPage from "./components/pages/MainPage";


const App = () => {

    return (
        <div>
            <MainPage/>
         
            {/* <CustomerSelection onCustomerChange={setCustomer} />
            <BillingAddress address={billingAddress} />
            <InvoiceDetails onDetailsChange={setInvoiceDetails} />
            <ItemsEntry onItemsChange={setItems} />
            <InvoiceSummary items={items} /> */}
        </div>
    );
};

export default App;
