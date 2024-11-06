import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex px-20 py-6 justify-between fixed top-0 w-full backdrop-blur-lg">
      <h1 className="text-2xl">eduAI</h1>
      <div className="flex list-none text-lg gap-8">
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
