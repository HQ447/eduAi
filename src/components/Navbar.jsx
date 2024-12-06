import { useState, useEffect, useRef } from "react";
// import { LuUserCircle } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { CiBrightnessUp } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMode,
  updateCurrStatus,
  updateShowSidebar,
  setactiveUser,
} from "../store/cartSlice";

function Navbar() {
  const dispatch = useDispatch();
  //update the showSidebar when the menu icon clicked
  const showSidebar = useSelector((state) => state.store.showSidebar);
  const darkMode = useSelector((state) => state.store.darkMode);
  //I add this to update the active Link in nanvigation
  const currStatus = useSelector((state) => state.store.currStatus);
  //After user is uthenticated the user is added to the activeUser obj in store and retrive from store
  const activeUser = useSelector((state) => state.store.activeUser);
  const navigate = useNavigate();
  //to open the drop down when user is autheticated , it contains userName Go to My Account and Logout button
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handledarkMode() {
    dispatch(updateMode(!darkMode));
  }

  return (
    <div
      className={` ${
        darkMode ? "bg-[#0f1113] text-white" : " bg-white text-[#000000b5] "
      } flex px-20 py-5 -xsm:py-3 items-center -md:px-10 -sm:px-6 -xsm:px-5  justify-between sticky top-0 z-40 w-full  transition-all`}
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <IoMenu
        className={`hidden text-xl -md:flex`}
        onClick={() => {
          dispatch(updateShowSidebar(!showSidebar));
        }}
      />
      <NavLink
        to={""}
        className={"flex items-center gap-1"}
        onClick={() => currStatus("Home")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
          alt="loading error"
          className="w-6"
        />
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
      <div className="flex list-none text-md gap-8 -md:hidden font-semibold">
        <NavLink
          to={""}
          className={`${
            currStatus === "Home" ? "text-[#1E3A8A] font-bold" : ""
          }`}
          onClick={() => dispatch(updateCurrStatus("Home"))}
        >
          Home
        </NavLink>
        <NavLink
          to={"about"}
          className={`${
            currStatus === "About" ? "text-[#1E3A8A] font-bold " : ""
          }`}
          onClick={() => dispatch(updateCurrStatus("About"))}
        >
          About
        </NavLink>
        <NavLink
          to={"courses"}
          className={`${
            currStatus === "Courses" ? "text-[#1E3A8A] font-bold" : ""
          }`}
          onClick={() => dispatch(updateCurrStatus("Courses"))}
        >
          Courses
        </NavLink>
        <NavLink
          to={"resources"}
          className={`${
            currStatus === "Resources" ? "text-[#1E3A8A] font-bold" : ""
          }`}
          onClick={() => dispatch(updateCurrStatus("Resources"))}
        >
          Resources
        </NavLink>
      </div>
      <div className="flex items-center text-2xl gap-2 -xsm:text-xl">
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

        {activeUser ? (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center "
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {/* <LuUserCircle /> */}
              <img
                src="https://cdn-icons-png.freepik.com/512/219/219988.png"
                alt=""
                className="w-7 -xsm:w-6  rounded-full hover:scale-95 transition-all "
              />
            </button>
            {isDropdownOpen && (
              <div
                className={`${
                  darkMode ? "text-white bg-[#3e3e3e]" : "bg-white"
                } absolute top-full right-0 mt-2 w-40 rounded-lg  shadow-lg text-sm`}
              >
                <p className="text-sm bg-orange-600 text-white rounded-t-lg px-4 py-2">
                  Welcome <b className=" capitalize ">{activeUser.username}</b>{" "}
                </p>
                <hr />
                <button
                  onClick={() => {
                    navigate("/accounts");
                  }}
                  className={`py-3 px-4 ${
                    darkMode ? "hover:bg-gray-500" : "hover:bg-gray-100"
                  } w-full text-left`}
                >
                  My Account
                </button>
                <hr />
                <button
                  onClick={() => dispatch(setactiveUser(null))}
                  className={`py-3 px-4 ${
                    darkMode ? "hover:bg-gray-500" : "hover:bg-gray-100"
                  } hover:bg-gray-100 w-full text-left`}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to={"/login"}
            className={
              "rounded-md py-2 -xsm:text-[10px] -xsm:px-4 -xsm:py-1 text-sm  bg-[#653bce] text-white px-5 "
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
