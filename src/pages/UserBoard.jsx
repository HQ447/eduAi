import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { IoHomeOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrStatus } from "../store/cartSlice";

function UserBoard() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const [currStatus, setCurrStatus] = useState("Home");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function renderChange() {
    dispatch(updateCurrStatus(currStatus));
  }

  useEffect(() => {
    renderChange();
  }, [currStatus]);

  return (
    <div className="w-full  ">
      <div
        className={`${
          darkMode ? "bg-[#52525273] backdrop-blur-md text-white " : "bg-white"
        } responsive-menu shadow-xl hidden -md:flex left-1/2 -translate-x-1/2 fixed bottom-10   px-5 py-3 rounded-full  justify-center items-center gap-6`}
      >
        <div
          className={`${
            currStatus === "Home" ? "bg-[#653bce] text-white" : ""
          } flex justify-center items-center gap-2 p-2 rounded-full transition-all`}
        >
          <IoHomeOutline
            className="text-xl"
            onClick={() => {
              setCurrStatus("Home");
              navigate("");
            }}
          />
          {currStatus === "Home" ? <p className="text-sm">Home</p> : ""}
        </div>
        <div
          className={`${
            currStatus === "Courses" ? "bg-[#653bce] text-white" : ""
          } flex justify-center items-center gap-2 p-2 rounded-full transition-all`}
        >
          <GiBlackBook
            className="text-xl"
            onClick={() => {
              setCurrStatus("Courses");
              navigate("courses");
            }}
          />
          {currStatus === "Courses" ? <p className="text-sm">Cources</p> : ""}
        </div>
        <div
          className={`${
            currStatus === "About" ? "bg-[#653bce] text-white" : ""
          } flex justify-center items-center gap-2 p-2 rounded-full transition-all`}
        >
          <AiOutlineTeam
            className="text-xl"
            onClick={() => {
              setCurrStatus("About");
              navigate("about");
            }}
          />
          {currStatus === "About" ? <p className="text-sm">About</p> : ""}
        </div>
        <div
          className={`${
            currStatus === "Resourses" ? "bg-[#653bce] text-white" : ""
          } flex justify-center items-center gap-2 p-2 rounded-full transition-all`}
        >
          <IoBulbOutline
            className="text-xl"
            onClick={() => {
              setCurrStatus("Resourses");
              navigate("resourses");
            }}
          />
          {currStatus === "Resourses" ? (
            <p className="text-sm">Resourses</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default UserBoard;
