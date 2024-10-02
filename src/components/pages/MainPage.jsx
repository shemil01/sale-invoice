import axios from "axios";
import AddSale from "./sales/AddSale";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import InvoiceSummary from "./sales/AddSale/InvoiceSummary";


export const Axios = axios.create({
  baseURL: "http://localhost:6500/api",
  withCredentials: true,
});
const MainPage = () => {
  return (
    <div className="flex">

      <Sidebar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-sale" element={<AddSale/>} />
        <Route path="/get-summary" element={<InvoiceSummary/>} />


      </Routes>

    </div>
  );
};

export default MainPage;
