import axios from "axios";
import AddSale from "./sales/AddSale";



export const Axios = axios.create({
  baseURL: "http://localhost:6500/api",
  withCredentials: true,
});
const MainPage = () => {
  
  return (
    <div>
       <AddSale />
    </div>
  )
}

export default MainPage