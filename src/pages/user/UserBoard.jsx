import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ResponsiveNav from "../../components/ResponsiveNav";

function UserBoard() {
  return (
    <div className="w-full  bg-gradient-to-b from-[#cce7f5] to-[#f5faff]">
      <ResponsiveNav />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserBoard;
