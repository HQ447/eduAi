import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function AdminSidebar({ showSidebar, setShowSidebar }) {
  const [activeTab, setActive] = useState("dashboard");

  function setActiveTabs(state) {
    setActive(state);
  }

  return (
    <div
      className={`${
        showSidebar ? "left-0" : " -left-96"
      } flex  px-5 py-10 text-white  flex-col w-[22%] -lg:w-[30%] bg-[#1f2937]  -md:w-[40%] -sm:w-[50%] -xsm:w-[70%] -md:fixed z-50 md:-left-96   min-h-screen `}
    >
      <div className="relative p-3 text-center border rounded-md shadow-md pt-14">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg"
          alt=""
          className="absolute w-16 h-16 rounded-full -top-5 left-24"
        />
        <p className="flex items-center justify-center gap-1 text-xs text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full "></div>
          Active
        </p>
        <h1 className="font-semibold ">{"Admin Name"}</h1>
        <p className="text-xs ">Admin of EduAI</p>
      </div>
      <div className="flex flex-col gap-3 my-5 text-sm">
        <NavLink
          to={""}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "dashboard" ? "!bg-[#1E3A8A] text-white " : ""
          } py-2  flex items-center gap-2  px-3 rounded-md`}
          onClick={() => {
            setActiveTabs("dashboard");
            setShowSidebar((prev) => !prev);
          }}
        >
          <RxDashboard className="text-lg" />
          Dashboard
        </NavLink>
        <NavLink
          to={"link2"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "link2" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => {
            setActiveTabs("link2");
            setShowSidebar((prev) => !prev);
          }}
        >
          <TbBrandGoogleAnalytics className="text-lg" />
          Analytics
        </NavLink>
        <NavLink
          to={"managecourses"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "managecourses" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => {
            setActiveTabs("managecourses");
            setShowSidebar((prev) => !prev);
          }}
        >
          <BsDatabaseAdd className="text-lg" />
          Manage Courses
        </NavLink>
        <NavLink
          to={"link4"}
          className={`hover:bg-gray-100 cursor-pointer ${
            activeTab == "link4" ? "!bg-[#1E3A8A] text-white" : ""
          } py-2  px-3 rounded-md`}
          onClick={() => {
            setActiveTabs("link4");
            setShowSidebar((prev) => !prev);
          }}
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
