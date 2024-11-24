import { useSelector, useDispatch } from "react-redux";
import "../style sheets/Home.css";
import { NavLink } from "react-router-dom";
import { updateCurrStatus } from "../../../store/cartSlice";

function Mainpage() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.store.darkMode);
  // bg-gradient-to-b from-[#f5faff] to-[#cce7f5]
  return (
    <div
      className={`${
        darkMode ? "bg-[#101215] text-white " : "bg-white"
      }    flex flex-col  px-20 -md:px-10 -sm:px-6 -xsm:px-3   w-full transition-all`}
    >
      <div className="flex w-full pt-14 py-8 md:items-center -md:justify-center flex-wrap-reverse">
        <div className="flex flex-col  basis-3/6 -md:basis-full  ">
          <p className="text-xs -xsm:text-center">For Teachers & Students</p>
          <h1 className=" -xsm:text-[1.5rem] my-2 text-5xl -md:text-center w-full -sm:text-4xl font-[600] lineHeight">
            Everyone can{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Learn
            </span>{" "}
            anything.
          </h1>
          <p
            className={` ${
              darkMode ? "text-white" : "text-[#000000b5] "
            } -xsm:text-sm text-lg mb-3 -md:text-center`}
          >
            Build a deep, solid understanding in math, science, and more
          </p>
          <NavLink to={"courses"} className={"-xsm:text-center"}>
            <button
              className="rounded-md hover:scale-95 transition-all -xsm:py-2 -xsm:text-sm -md:mx-auto max-w-fit py-3  px-5 bg-[#653bce] text-white font-semibold"
              onClick={() => dispatch(updateCurrStatus("Courses"))}
            >
              Learners, Start Here
            </button>
          </NavLink>
        </div>
        <div className="flex basis-3/6 -xsm:mb-5  -md:basis-full -md:w-full ">
          <img
            src="https://www.becodemy.com/_next/static/media/banner.8a9f498b.svg"
            alt="img loading error"
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
