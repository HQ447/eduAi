import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

function AdminDashboard() {
  return (
    <div className="flex w-full bg-[#eae9e9]">
      <AdminSidebar />
      <div className="flex flex-col w-[75%]">
        <div className="ribbon px-10 py-4 shadow-lg bg-[#f1f1f1]">
          profileicon
        </div>
        <div className="flex flex-col px-10 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
