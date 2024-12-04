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
      } flex px-5 py-10  flex-col w-[22%] -lg:w-[30%] -md:w-[40%] -sm:w-[50%] -xsm:w-[70%] -md:fixed -left-72 bg-white  min-h-screen `}
    >
      <div className="relative pt-14 border shadow-md rounded-md text-center   p-3">
        <img
          src="https://imgcdn.stablediffusionweb.com/2024/6/12/4d688bcf-f53b-42b6-a98d-3254619f3b58.jpg"
          alt=""
          className="rounded-full w-16 h-16 absolute -top-5 left-24"
        />
        <p className="flex justify-center items-center gap-1 text-xs text-gray-600">
          <div className=" bg-green-500 w-2 h-2 rounded-full"></div>
          Active
        </p>
        <h1 className=" font-semibold">Ayesha Khan Afridi</h1>
        <p className=" text-xs">Founder of EduAI</p>
      </div>
      <div className="flex flex-col my-5 gap-3 text-sm">
        <NavLink
          to={""}
          className={`${
            activeTab == "dashboard" ? "bg-[#1E3A8A] text-white " : ""
          } py-2   px-3 rounded-md`}
          onClick={() => setActiveTabs("dashboard")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"link2"}
          className={` ${
            activeTab == "link2" ? "bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 rounded-md`}
          onClick={() => setActiveTabs("link2")}
        >
          Analytics
        </NavLink>
        <NavLink
          to={"link3"}
          className={` ${
            activeTab == "link3" ? "bg-[#1E3A8A] text-white" : ""
          } py-2 px-3 rounded-md`}
          onClick={() => setActiveTabs("link3")}
        >
          Add/Drop Courses
        </NavLink>
        <NavLink
          to={"link4"}
          className={` ${
            activeTab == "link4" ? "bg-[#1E3A8A] text-white" : ""
          } py-2  px-3 rounded-md`}
          onClick={() => setActiveTabs("link4")}
        >
          Link 4
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
