import { LuUserCircle } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { RiMenuFold3Line } from "react-icons/ri";
// import { FaRegBell } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMode,
  updateCurrStatus,
  updateShowSidebar,
} from "../store/cartSlice";

function Navbar() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.store.showSidebar);
  const darkMode = useSelector((state) => state.store.darkMode);
  const currStatus = useSelector((state) => state.store.currStatus);

  function handledarkMode() {
    dispatch(updateMode(!darkMode));
  }
  return (
    <div
      className={` ${
        darkMode
          ? "bg-[#000000d6] text-white"
          : " bg-[#eff9ff99] text-[#000000b5] "
      } flex px-20 py-6 -xsm:py-4 items-center -md:px-10 -sm:px-6 bg-opacity-50 justify-between sticky top-0 z-40 w-full backdrop-blur-lg transition-all`}
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <RiMenuFold3Line
        className={`hidden text-xl -md:flex`}
        onClick={() => {
          dispatch(updateShowSidebar(!showSidebar));
        }}
      />
      <NavLink to={""}>
        <h1 className="text-2xl font-semibold -xsm:text-xl">
          edu
          <span
            style={{
              background:
                "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI
          </span>
        </h1>
      </NavLink>
      <div className="flex list-none text-lg gap-8 -md:hidden font-semibold">
        <NavLink
          to={""}
          className={`${currStatus === "Home" ? "text-[#653bce]" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Home"))}
        >
          Home
        </NavLink>
        <NavLink
          to={"about"}
          className={`${currStatus === "About" ? "text-[#653bce]" : ""}`}
          onClick={() => dispatch(updateCurrStatus("About"))}
        >
          About
        </NavLink>
        <NavLink
          to={"courses"}
          className={`${currStatus === "Courses" ? "text-[#653bce]" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Courses"))}
        >
          Courses
        </NavLink>
        <NavLink
          to={"resourses"}
          className={`${currStatus === "Resourses" ? "text-[#653bce]" : ""}`}
          onClick={() => dispatch(updateCurrStatus("Resourses"))}
        >
          Resources
        </NavLink>
      </div>
      <div className="flex text-2xl gap-4 -xsm:text-xl">
        {darkMode ? (
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

        <NavLink to={"/login"}>
          <LuUserCircle />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
