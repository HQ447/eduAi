import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="flex px-20 py-6 bg-[#ffffff80] -md:px-10 -sm:px-6 bg-opacity-50 justify-between fixed top-0 w-full backdrop-blur-lg"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h1 className="text-2xl">eduAI</h1>
      <div className="flex list-none text-lg gap-8 -md:hidden">
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"about"}>About</NavLink>
        <NavLink to={"courses"}>Courses</NavLink>
        <NavLink to={"resources"}>Resources</NavLink>
      </div>
      <div className="flex text-2xl gap-4">
        <IoMoonOutline />
        <IoChatbubbleEllipsesOutline />
        <FaRegBell />
        <LuUserCircle />
      </div>
    </div>
  );
}

export default Navbar;
