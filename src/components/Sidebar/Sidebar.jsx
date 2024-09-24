import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidHome } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RiAlignItemVerticalCenterFill } from "react-icons/ri";
import { FaSalesforce } from "react-icons/fa6";

const Sidebar = () => {
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
        <li>
          <p
            to={"/admin/all-users"}
            className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]"
          >
            <BiSolidHome  className="mr-2" />
            <span>Users</span>
          </p>
        </li>
        <li>
          <p to={'/admin/all-songs'} className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <FiUsers  className="mr-2"/>
            <span>Songs</span>
          </p>
        </li>
        <li>
          <p className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <   RiAlignItemVerticalCenterFill  className="mr-2" />
            <span>Playlists</span>
          </p>
        </li>
        <li>
          <p className="flex items-center py-2 px-4 rounded-md hover:bg-[#b3b3b3]">
            {" "}
            <FaSalesforce className="mr-2" />
            <span>Analytics</span>
          </p>
        </li>
      </ul>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;
