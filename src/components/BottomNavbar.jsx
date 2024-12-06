import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDataset } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { updateCurrStatus } from "../store/cartSlice";

function BottomNavbar() {
  const dispatch = useDispatch();
  //   const darkMode = useSelector((state) => state.store.darkMode);
  const [currStatus, setCurrStatus] = useState("Home");

  function renderChange() {
    dispatch(updateCurrStatus(currStatus));
  }

  useEffect(() => {
    renderChange();
  }, [currStatus]);

  return (
    <div className="w-full fixed bottom-0 bg-[#300f85] text-white text-xs justify-center gap-6 flex py-1">
      <NavLink
        to={""}
        onClick={() => setCurrStatus("Home")}
        className={` ${
          currStatus == "Home"
            ? "bg-white rounded-full relative p-2 -top-2 border-2 border-[#300f85] text-black"
            : ""
        } flex flex-col justify-center items-center`}
      >
        <IoHomeOutline className="text-lg" />
        {/* {currStatus === "Home" ? <p className="text-sm">Home</p> : ""} */}
      </NavLink>
      <NavLink
        to={"about"}
        onClick={() => setCurrStatus("About")}
        className={`  ${
          currStatus == "About"
            ? "bg-white rounded-full relative p-2 -top-2 border-2 border-[#300f85] text-black"
            : ""
        } flex transition-all flex-col justify-center items-center`}
      >
        <RiTeamLine className="text-lg" />
        {/* {currStatus === "About" ? <p className="text-sm">About</p> : ""} */}
      </NavLink>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
        alt=""
      />
      <NavLink
        to={"courses"}
        onClick={() => setCurrStatus("Courses")}
        className={`  ${
          currStatus == "Courses"
            ? "bg-white rounded-full relative p-2 -top-2 border-2 border-[#300f85] text-black"
            : ""
        } flex transition-all flex-col justify-center items-center`}
      >
        <IoBookOutline className="text-lg" />
        {/* {currStatus === "Courses" ? <p className="text-sm">Courses</p> : ""} */}
      </NavLink>
      <NavLink
        to={"resources"}
        onClick={() => setCurrStatus("Resourses")}
        className={`  ${
          currStatus == "Resourses"
            ? "bg-white rounded-full relative p-2 -top-2 border-2 border-[#300f85] text-black"
            : ""
        } flex flex-col justify-center items-center`}
      >
        <MdOutlineDataset className="text-lg" />
        {/* {currStatus === "Resourses" ? <p className="text-sm">Resourses</p> : ""} */}
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
