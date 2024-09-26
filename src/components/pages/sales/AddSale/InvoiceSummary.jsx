const InvoiceSummary = ({ invoiceSummary }) => {
  console.log("t:", invoiceSummary);
  return (
    <div>
    <header>
        <h1>
            {invoiceSummary.customer}
        </h1>
    </header>
    </div>
  );
};

export default InvoiceSummary;
