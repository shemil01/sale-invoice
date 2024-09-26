
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
