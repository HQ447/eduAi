import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsDatabaseAdd } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEditNotifications } from "react-icons/md";

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
      } flex  px-5 py-10 text-white  flex-col w-[20%] -lg:w-[30%] bg-[#1f2937]  -md:w-[40%] -sm:w-[50%] -xsm:w-[70%] -md:fixed z-50 md:-left-96   min-h-screen `}
    >
      <div className="relative p-3 text-center  rounded-md shadow-md bg-[#2b384d]  ">
        <p className="flex items-center text-white justify-center gap-1 text-xs ">
          <div className="w-2 h-2 bg-green-500 rounded-full  "></div>
          Active
        </p>
        <h1 className="font-semibold ">{"Admin Name"}</h1>
        <p className="text-xs ">Admin</p>
      </div>
      <div className="flex flex-col gap-3 my-5 text-sm">
        <NavLink
          to={""}
          className={`hover:bg-[#3b4e69] text-xs cursor-pointer ${
            activeTab == "dashboard" ? "!bg-[#f33c1c] text-white " : ""
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
          to={"users"}
          className={`hover:bg-[#3b4e69] text-xs cursor-pointer ${
            activeTab == "user" ? "!bg-[#f33c1c] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => {
            setActiveTabs("user");
            setShowSidebar((prev) => !prev);
          }}
        >
          <TbBrandGoogleAnalytics className="text-lg" />
          User Management
        </NavLink>
        <NavLink
          to={"managecourses"}
          className={`hover:bg-[#3b4e69] text-xs cursor-pointer ${
            activeTab == "managecourses" ? "!bg-[#f33c1c] text-white" : ""
          } py-2 px-3 flex items-center gap-2 rounded-md`}
          onClick={() => {
            setActiveTabs("managecourses");
            setShowSidebar((prev) => !prev);
          }}
        >
          <BsDatabaseAdd className="text-lg" />
          Course Management
        </NavLink>
        <NavLink
          to={"notifications"}
          className={`hover:bg-[#3b4e69] text-xs cursor-pointer ${
            activeTab == "notification" ? "!bg-[#f33c1c] text-white" : ""
          } py-2 flex items-center gap-2 px-3 rounded-md`}
          onClick={() => {
            setActiveTabs("notification");
            setShowSidebar((prev) => !prev);
          }}
        >
          <MdOutlineEditNotifications className="text-xl" />
          Notifications
        </NavLink>
        <NavLink
          to={"admin-settings"}
          className={`hover:bg-[#3b4e69] text-xs cursor-pointer ${
            activeTab == "setting" ? "!bg-[#f33c1c] text-white" : ""
          } py-2 flex items-center gap-2 px-3 rounded-md`}
          onClick={() => {
            setActiveTabs("setting");
            setShowSidebar((prev) => !prev);
          }}
        >
          <IoSettingsOutline className="text-xl" />
          Settings
        </NavLink>
        <NavLink
          to={"/adminlogin"}
          className={` flex items-center gap-2  hover:bg-[#3b4e69] text-xs cursor-pointer py-2  px-3 rounded-md  font-semibold`}
        >
          <MdLogout className="text-lg" />
          Logout
        </NavLink>
      </div>
      <button className="text-xs py-2  absolute px-5 bottom-10 left-10 bg-indigo-600 rounded-md">
        Visit EduAI &gt;&gt;{" "}
      </button>
    </div>
  );
}

export default AdminSidebar;
