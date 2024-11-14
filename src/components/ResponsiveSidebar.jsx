import { useDispatch, useSelector } from "react-redux";
import { updateCurrStatus, updateShowSidebar } from "../store/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function ResponsiveSidebar() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.store.showSidebar);
  const darkMode = useSelector((state) => state.store.darkMode);
  const currStatus = useSelector((state) => state.store.currStatus);

  function renderChange(currStatus) {
    dispatch(updateCurrStatus(currStatus));

    setTimeout(() => {
      dispatch(updateShowSidebar(false));
    }, 4000);
  }

  return (
    <div
      className={`${
        showSidebar ? "fixed" : "hidden"
      } md:hidden inset-0 z-50 flex justify-end transition-all`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
        onClick={() => {
          dispatch(updateShowSidebar(false));
        }}
      />

      {/* Sidebar on the right */}
      <div
        className={`relative ${showSidebar ? "right-0" : "-right-[50rem]"} ${
          darkMode ? "!bg-[#141414fc] text-white" : "bg-white"
        } px-20 -xsm:gap-5  -xsm:px-4 justify-center  transition-all gap-10 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex z-50 `}
      >
        <RxCross2
          className={`${
            darkMode ? "text-white" : "text-black"
          } absolute top-10 left-10 text-2xl`}
          onClick={() => dispatch(updateShowSidebar(false))}
        />
        <div className="w-full gap-3 mb-4 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <h1>EduAI</h1>
        </div>

        <NavLink
          to={""}
          onClick={() => renderChange("Home")}
          className={`${
            currStatus === "Home" ? "bg-[#653bce] text-white" : ""
          } flex gap-3 items-center -xsm:text-2xl w-full py-2 rounded-md px-2`}
        >
          <IoHomeOutline className="text-3xl" />
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to={"about"}
          onClick={() => renderChange("About")}
          className={`${
            currStatus === "About" ? "bg-[#653bce] text-white" : ""
          } flex gap-3 items-center -xsm:text-2xl w-full py-2 rounded-md px-2`}
        >
          <AiOutlineTeam className="text-3xl" />
          <h1>About Us</h1>
        </NavLink>
        <NavLink
          to={"courses"}
          onClick={() => renderChange("Courses")}
          className={`${
            currStatus === "Courses" ? "bg-[#653bce] text-white" : ""
          } flex gap-3 items-center -xsm:text-2xl w-full py-2 rounded-md px-2`}
        >
          <GiBlackBook className="text-3xl" />
          <h1>Courses</h1>
        </NavLink>
        <NavLink
          to={"resourses"}
          onClick={() => renderChange("Resourses")}
          className={`${
            currStatus === "Resourses" ? "bg-[#653bce] text-white" : ""
          } flex gap-3 items-center -xsm:text-2xl w-full py-2 rounded-md px-2`}
        >
          <IoBulbOutline className="text-3xl" />
          <h1>Resourses</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
