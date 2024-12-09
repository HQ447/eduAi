import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import ResponsiveNav from "../../components/ResponsiveNav";
import ResponsiveSidebar from "../../components/ResponsiveSidebar";
import BottomNavbar from "../../components/BottomNavbar";

function UserSection() {
  // bg-gradient-to-b from-[#cce7f5] to-[#f5faff]
  return (
    <div className="w-full bg-white ">
      {/* <ResponsiveNav /> */}
      <ResponsiveSidebar />
      <Navbar />
      <Outlet />
      <Footer />
      <BottomNavbar />
    </div>
  );
}

export default UserSection;
