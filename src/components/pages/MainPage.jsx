import axios from "axios";
import AddSale from "./sales/AddSale";
import Sidebar from "../Sidebar/Sidebar";

export const Axios = axios.create({
  baseURL: "http://localhost:6500/api",
  withCredentials: true,
});
const MainPage = () => {
  return (
    <div>
      {/* <Sidebar /> */}
      <AddSale />
    </div>
  );
};

export default MainPage;
