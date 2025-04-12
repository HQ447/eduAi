import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
//import { IoMdNotificationsOutline } from "react-icons/io";

function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex w-full ">
      <AdminSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className="flex flex-col w-[80%] -lg:w-[70%] -md:w-full h-screen"
        onClick={() => {
          if (showSidebar) setShowSidebar(false);
        }}
      >
        <IoIosMenu
          className="fixed hidden text-xl cursor-pointer z-30 -md:flex top-10 right-9"
          onClick={() => {
            setShowSidebar((prev) => !prev);
          }}
        />

        <div className="flex flex-col min-h-screen px-10 py-4 overflow-auto -xsm:px-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
