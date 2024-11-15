import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

function AdminDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex w-full bg-[#eae9e9]">
      <AdminSidebar showSidebar={showSidebar} />
      <div
        className="flex flex-col w-[78%] -lg:w-[70%] -md:w-full"
        onClick={() => {
          if (showSidebar) setShowSidebar(false);
        }}
      >
        <div className="flex justify-between ribbon -xsm:px-3 px-10 py-4  shadow-lg bg-[#f1f1f1]">
          <IoIosMenu
            className="hidden -md:flex cursor-pointer"
            onClick={() => {
              setShowSidebar((prev) => !prev);
            }}
          />
          profileicon
        </div>
        <div className="flex flex-col -xsm:px-3 px-10 py-4 min-h-screen">
          <Outlet />
        </div>
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
