import { useState } from "react";
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [activeTab, setActive] = useState("dashboard");

  function setActiveTabs(state) {
    setActive(state);
  }

  return (
    <div className="flex px-5  flex-col w-[25%] bg-white  min-h-screen ">
      <h1 className="mt-8 my-6 text-center">Admin Dashbpard</h1>
      <hr className="" />
      <div className="flex flex-col my-10 gap-3">
        <NavLink
          to={""}
          className={`py-3 bg-[#9e1cb4] text-white px-3 rounded-sm`}
          onClick={() => setActiveTabs("dashboard")}
        >
          Defaul
        </NavLink>
        <NavLink
          to={"/link2"}
          className={`py-3 px-3 rounded-sm`}
          onClick={() => setActiveTabs("link2")}
        >
          Link 2
        </NavLink>
        <NavLink
          to={"/link3"}
          className={`py-3 px-3 rounded-sm`}
          onClick={() => setActiveTabs("link3")}
        >
          Link 3
        </NavLink>
        <NavLink
          to={"/link4"}
          className={`py-3  px-3 rounded-sm`}
          onClick={() => setActiveTabs("link4")}
        >
          Link 4
        </NavLink>
      </div>
    </div>
  );
}

export default AdminSidebar;
