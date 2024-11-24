import { useState } from "react";
import { NavLink } from "react-router-dom";

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
      } flex px-5  flex-col w-[22%] -lg:w-[30%] -md:w-[40%] -sm:w-[50%] -xsm:w-[70%] -md:fixed -left-72 bg-white  min-h-screen `}
    >
      <h1 className="mt-8 my-6 text-center">Admin Dashbpard</h1>
      <hr className="" />
      <div className="flex flex-col my-10 gap-3">
        <NavLink
          to={""}
          className={`${
            activeTab == "dashboard" ? "bg-[#9e1cb4] text-white" : ""
          } py-3   px-3 rounded-md`}
          onClick={() => setActiveTabs("dashboard")}
        >
          Defaul
        </NavLink>
        <NavLink
          to={"link2"}
          className={` ${
            activeTab == "link2" ? "bg-[#9e1cb4] text-white" : ""
          } py-3 px-3 rounded-md`}
          onClick={() => setActiveTabs("link2")}
        >
          Link 2
        </NavLink>
        <NavLink
          to={"link3"}
          className={` ${
            activeTab == "link3" ? "bg-[#9e1cb4] text-white" : ""
          } py-3 px-3 rounded-md`}
          onClick={() => setActiveTabs("link3")}
        >
          Link 3
        </NavLink>
        <NavLink
          to={"link4"}
          className={` ${
            activeTab == "link4" ? "bg-[#9e1cb4] text-white" : ""
          } py-3  px-3 rounded-md`}
          onClick={() => setActiveTabs("link4")}
        >
          Link 4
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
