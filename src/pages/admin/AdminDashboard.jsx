import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";

function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex w-full ">
      <AdminSidebar showSidebar={showSidebar} />
      <div
        className="flex flex-col w-[78%] -lg:w-[70%] -md:w-full"
        onClick={() => {
          if (showSidebar) setShowSidebar(false);
        }}
      >
        <div className="flex items-center justify-between ribbon -xsm:px-3 px-10 py-2 bg-white ">
          <IoIosMenu
            className="hidden -md:flex cursor-pointer text-xl"
            onClick={() => {
              setShowSidebar((prev) => !prev);
            }}
          />
          <div className="flex items-center ">
            <div className="flex items-center gap-2 py-2 px-2 rounded-full bg-[#edf1fc]">
              <SlMagnifier />
              <input
                type="text"
                placeholder="Search now"
                className="text-xs bg-[#edf1fc] placeholder:text-[#7f7f7f]  placeholder:text-xs  outline-none"
              />
            </div>
          </div>
          <IoMdNotificationsOutline />
        </div>
        <div className="flex flex-col bg-[#f5f7ff] -xsm:px-3 px-10 py-4 min-h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
