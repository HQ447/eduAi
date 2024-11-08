import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuUserCircle } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMode, updateCurrStatus } from "../store/cartSlice";

function Navbar() {
  const [darkMode, setdarkMode] = useState(false);
  const dispatch = useDispatch();

  function handledarkMode() {
    setdarkMode((prev) => !prev);
    dispatch(updateMode(darkMode));
  }

  const darkModeFromRedux = useSelector((state) => state.store.darkMode);
  const currStatus = useSelector((state) => state.store.currStatus);

  return (
    <div
      className={` ${
        darkModeFromRedux
          ? "bg-[#1b1b1b8f] text-white"
          : " bg-[#eff9ff99] text-[#000000b5] "
      } flex px-20 py-6 -md:px-10 -sm:px-6 bg-opacity-50 justify-between fixed top-0 w-full backdrop-blur-lg transition-all`}
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <NavLink to={""}>
        <h1 className="text-2xl font-semibold">eduAI</h1>
      </NavLink>
      <div className="flex list-none text-lg gap-8 -md:hidden font-semibold">
        <NavLink
          to={""}
          className={`${currStatus === "Home" ? "text-green-600" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Home"))}
        >
          Home
        </NavLink>
        <NavLink
          to={"about"}
          className={`${currStatus === "About" ? "text-green-600" : ""}`}
          onClick={() => dispatch(updateCurrStatus("About"))}
        >
          About
        </NavLink>
        <NavLink
          to={"courses"}
          className={`${currStatus === "Courses" ? "text-green-600" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Courses"))}
        >
          Courses
        </NavLink>
        <NavLink
          to={"resourses"}
          className={`${currStatus === "Resourses" ? "text-green-600" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Resourses"))}
        >
          Resources
        </NavLink>
      </div>
      <div className="flex text-2xl gap-4">
        {darkModeFromRedux ? (
          <CiBrightnessUp
            onClick={handledarkMode}
            className=" hover:scale-95 cursor-pointer"
          />
        ) : (
          <IoMoonOutline
            onClick={handledarkMode}
            className=" hover:scale-95 cursor-pointer"
          />
        )}

        <IoChatbubbleEllipsesOutline />
        <FaRegBell />
        <LuUserCircle />
      </div>
    </div>
  );
}

export default Navbar;
