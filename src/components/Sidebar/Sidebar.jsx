import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiAlignItemVerticalCenterFill } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-64 h-screen bg-black">
      <header>
        <div className="text-white flex space-x-2 items-center pt-5 pl-5">
          <FaRegUserCircle className="text-2xl" />
          <h1>My company</h1>
          <IoIosArrowForward />
        </div>
        <div className="text-white">
        <ul>
        <li onClick={()=>navigate('/')}>
          <p
           
            className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]"
          >
            <BiSolidHome  className="mr-2" />
            <span>Home</span>
          </p>
        </li>
        <li>
          <p className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <FiUsers  className="mr-2"/>
            <span>Users</span>
          </p>
        </li>
        <li>
          <p className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <   RiAlignItemVerticalCenterFill  className="mr-2" />
            <span>Ivoice</span>
          </p>
        </li>
        <li onClick={()=>navigate('/add-sale')}>
          <p className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <FaSalesforce className="mr-2" />
            <span>Add Sale</span>
          </p>
        </li>
      </ul>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
