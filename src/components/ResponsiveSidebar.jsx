import { useDispatch, useSelector } from "react-redux";
import { updateShowSidebar } from "../store/cartSlice";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";

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
        } px-20 justify-center  transition-all gap-5 flex-col min-h-screen -md:w-[50%] -sm:w-[60%] -xsm:w-[80%] flex z-50 `}
      >
        <RxCross2
          className={`${
            darkMode ? "text-white" : "text-black"
          } absolute top-10 left-10 text-2xl`}
          onClick={() => dispatch(updateShowSidebar(false))}
        />
        <div className="flex gap-3 items-center">
          <IoHomeOutline />
          <h1>Home</h1>
        </div>
        <div className="flex gap-3 items-center">
          <AiOutlineTeam />
          <h1>About Us</h1>
        </div>
        <div className="flex gap-3 items-center">
          <GiBlackBook />
          <h1>Courses</h1>
        </div>
        <div className="flex gap-3 items-center">
          <IoBulbOutline />
          <h1>Resourses</h1>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveSidebar;
