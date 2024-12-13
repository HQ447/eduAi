import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function AdminSidebar({ showSidebar }) {
  const [activeTab, setActive] = useState("dashboard");

  function setActiveTabs(state) {
    setActive(state);
  }

  return (
    <div
      className={`${
        showSidebar ? "left-0" : "-left-72"
      } flex  px-5 py-10  flex-col w-[22%] -lg:w-[30%] -md:w-[40%] -sm:w-[50%] -xsm:w-[70%] -md:fixed -left-72 bg-white  min-h-screen `}
    >
      <div className="relative pt-14  border shadow-md rounded-md text-center   p-3">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg"
          alt=""
          className="rounded-full w-16 h-16 absolute -top-5 left-24"
        />
        <p className="flex justify-center items-center gap-1 text-xs text-gray-600">
          <div className=" bg-green-500 w-2 h-2 rounded-full"></div>
          Active
        </p>
        <h1 className=" font-semibold">{"Admin Name"}</h1>
        <p className=" text-xs">Admin of EduAI</p>
      </div>
      <div className="flex flex-col my-5 gap-3 text-sm">
        <NavLink
          to={""}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "dashboard" ? "!bg-[#1E3A8A] text-white " : ""
          } py-2  flex items-center gap-2  px-3 rounded-md`}
          onClick={() => setActiveTabs("dashboard")}
        >
          <RxDashboard className="text-lg" />
          Dashboard
        </NavLink>
        <NavLink
          to={"link2"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "link2" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => setActiveTabs("link2")}
        >
          <TbBrandGoogleAnalytics className="text-lg" />
          Analytics
        </NavLink>
        <NavLink
          to={"managecourses"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "managecourses" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => setActiveTabs("managecourses")}
        >
          <BsDatabaseAdd className="text-lg" />
          Manage Courses
        </NavLink>
        <NavLink
          to={"link4"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "link4" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2  px-3 rounded-md`}
          onClick={() => setActiveTabs("link4")}
        >
          Link 4
        </NavLink>
        <NavLink
          to={"/adminlogin"}
          className={` flex gap-2  hover:bg-gray-100 cursor-pointer py-2  px-3 rounded-md text-red-600 font-semibold`}
        >
          <MdLogout className="text-lg" />
          Logout
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
