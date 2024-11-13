import { useDispatch, useSelector } from "react-redux";
import { updateShowSidebar } from "../store/cartSlice";
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
        } px-20 -xsm:px-10 justify-center  transition-all gap-10 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex z-50 `}
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
          onClick={() => {
            setCurrStatus("");
            dispatch(updateShowSidebar(false));
          }}
          className="flex gap-3 items-center w-full"
        >
          <IoHomeOutline className="text-3xl" />
          <h1>Home</h1>
        </NavLink>
        <NavLink
          to={""}
          onClick={() => {
            setCurrStatus("");
            dispatch(updateShowSidebar(false));
          }}
          className="flex gap-3 items-center w-full"
        >
          <AiOutlineTeam className="text-3xl" />
          <h1>About Us</h1>
        </NavLink>
        <NavLink
          to={""}
          onClick={() => {
            setCurrStatus("");
            dispatch(updateShowSidebar(false));
          }}
          className="flex gap-3 items-center w-full"
        >
          <GiBlackBook className="text-3xl" />
          <h1>Courses</h1>
        </NavLink>
        <NavLink
          to={""}
          onClick={() => {
            setCurrStatus("");
            dispatch(updateShowSidebar(false));
          }}
          className="flex gap-3 items-center w-full"
        >
          <IoBulbOutline className="text-3xl" />
          <h1>Resourses</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
