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
    }, 400);
  }

  return (
    <div
      className={`${
        showSidebar ? "fixed" : "hidden"
      } md:hidden inset-0 z-50 flex justify-end`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"
        onClick={() => {
          dispatch(updateShowSidebar(false));
        }}
      />

      {/* Sidebar with sliding effect */}
      <div
        className={`relative transform transition-transform duration-[3s] ease-in-out  ${
          showSidebar ? "right-0" : " -right-48"
        } ${darkMode ? "!bg-[#141414fc] text-white" : "bg-white"}
          -xsm:gap-5   gap-10 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex z-50`}
      >
        <RxCross2
          className={`${
            darkMode ? "text-white" : "text-black"
          } absolute top-3 left-3 text-xl text-white`}
          onClick={() => dispatch(updateShowSidebar(false))}
        />
        <div className=" text-white py-5 gap-2 rounded-lg m-2  bg-orange-600  flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <h1>EduAI</h1>
        </div>

        <div className="px-2 gap-4 flex flex-col">
          <NavLink
            to={""}
            onClick={() => renderChange("Home")}
            className={`${
              currStatus === "Home" ? "bg-orange-600 text-white" : ""
            } flex gap-3 items-center  w-full py-2 rounded-md px-2`}
          >
            <IoHomeOutline className="text-3xl -xsm:text-sm" />
            <h1 className="text-xs">Home</h1>
          </NavLink>
          <NavLink
            to={"about"}
            onClick={() => renderChange("About")}
            className={`${
              currStatus === "About" ? "bg-orange-600 text-white" : ""
            } flex gap-3 items-center  w-full py-2 rounded-md px-2`}
          >
            <AiOutlineTeam className="text-3xl -xsm:text-sm" />
            <h1 className="text-xs">About Us</h1>
          </NavLink>
          <NavLink
            to={"courses"}
            onClick={() => renderChange("Courses")}
            className={`${
              currStatus === "Courses" ? "bg-orange-600 text-white" : ""
            } flex gap-3 items-center  w-full py-2 rounded-md px-2`}
          >
            <GiBlackBook className="text-3xl -xsm:text-sm" />
            <h1 className="text-xs">Courses</h1>
          </NavLink>
          <NavLink
            to={"resources"}
            onClick={() => renderChange("Resourses")}
            className={`${
              currStatus === "Resourses" ? "bg-orange-600 text-white" : ""
            } flex gap-3 items-center  w-full py-2 rounded-md px-2`}
          >
            <IoBulbOutline className="text-3xl -xsm:text-sm" />
            <h1 className="text-xs">Resources</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
