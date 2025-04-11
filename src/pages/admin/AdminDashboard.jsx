import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";

function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex w-full ">
      <AdminSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className="flex flex-col w-[78%] -lg:w-[70%] -md:w-full"
        onClick={() => {
          if (showSidebar) setShowSidebar(false);
        }}
      >
        <div className="flex items-center justify-end px-10 py-2 bg-white -md:justify-between ribbon -xsm:px-3 ">
          <IoIosMenu
            className="hidden text-xl cursor-pointer -md:flex"
            onClick={() => {
              setShowSidebar((prev) => !prev);
            }}
          />

          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <div className="flex flex-col bg-[#f5f7ff] -xsm:px-3 px-10 py-4 min-h-screen ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
