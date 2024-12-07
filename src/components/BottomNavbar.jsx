import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDataset } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { updateCurrStatus } from "../store/cartSlice";

function BottomNavbar() {
  const dispatch = useDispatch();
  //   const darkMode = useSelector((state) => state.store.darkMode);
  const currStatus = useSelector((state) => state.store.currStatus);
  return (
    <div className="hidden h-14 -xsm:flex w-full fixed bottom-0 bg-[#4c2f93] text-white text-xs justify-center gap-6">
      <NavLink
        to={""}
        onClick={() => dispatch(updateCurrStatus("Home"))}
        className={` ${
          currStatus == "Home"
            ? "bg-white rounded-full relative  -top-2 border-2 border-[#4c2f93] text-black"
            : ""
        } w-10 h-10  rounded-full  flex flex-col justify-center items-center`}
      >
        <IoHomeOutline className="text-lg" />
        {/* {currStatus === "Home" ? <p className="text-sm">Home</p> : ""} */}
      </NavLink>
      <NavLink
        to={"about"}
        onClick={() => dispatch(updateCurrStatus("About"))}
        className={`  ${
          currStatus == "About"
            ? "bg-white rounded-full relative -top-2 border-2 border-[#4c2f93] text-black"
            : ""
        } w-10 h-10  rounded-full flex transition-all flex-col justify-center items-center`}
      >
        <RiTeamLine className="text-lg" />
        {/* {currStatus === "About" ? <p className="text-sm">About</p> : ""} */}
      </NavLink>
      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
        alt=""
        className=" w-10 h-10 rounded-full relative -top-2 border-2 border-[#300f85]"
      /> */}
      <NavLink
        to={"courses"}
        onClick={() => dispatch(updateCurrStatus("Courses"))}
        className={`  ${
          currStatus == "Courses"
            ? "bg-white rounded-full relative  -top-2 border-2 border-[#4c2f93] text-black"
            : ""
        } w-10 h-10  rounded-full  flex transition-all flex-col justify-center items-center`}
      >
        <IoBookOutline className="text-lg" />
        {/* {currStatus === "Courses" ? <p className="text-sm">Courses</p> : ""} */}
      </NavLink>
      <NavLink
        to={"resources"}
        onClick={() => dispatch(updateCurrStatus("Resourses"))}
        className={`  ${
          currStatus == "Resourses"
            ? "bg-white rounded-full relative  -top-2 border-2 border-[#4c2f93] text-black"
            : ""
        } w-10 h-10  rounded-full  flex flex-col justify-center items-center`}
      >
        <MdOutlineDataset className="text-lg" />
        {/* {currStatus === "Resourses" ? <p className="text-sm">Resourses</p> : ""} */}
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
