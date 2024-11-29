import { useSelector, useDispatch } from "react-redux";
import "../style sheets/Home.css";
import { NavLink } from "react-router-dom";
import { updateCurrStatus } from "../../../store/cartSlice";

function Mainpage() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.store.darkMode);
  // bg-gradient-to-b from-[#f5faff] to-[#cce7f5]
  // bg-[#653bce]
  return (
    <div
      className={`${
        darkMode ? "bg-[#0f1113] text-white " : "bg-white"
      }    flex flex-col  px-20 -md:px-10 -sm:px-6 -xsm:px-4   w-full transition-all`}
    >
      <div className="flex w-full pt-14 py-8 md:items-center -md:justify-center flex-wrap-reverse">
        <div className="flex flex-col  basis-3/6 -md:basis-full  ">
          <p className="text-xs -md:text-center">For Teachers & Students</p>
          <h1 className=" -xsm:text-[1.5rem] my-2 text-5xl -md:text-center w-full -sm:text-4xl font-[600] lineHeight">
            Everyone can{" "}
            <span
              style={{
                background:
                  " linear-gradient(90deg, rgb(234 88 12) 2.34%, rgb(229 3 3) 100.78%)",
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
              className="rounded-md hover:scale-95 transition-all -xsm:py-3 -xsm:text-sm -md:mx-auto -md:text-center w-full max-w-fit py-3  px-5 bg-orange-600 text-white font-semibold"
              onClick={() => dispatch(updateCurrStatus("Courses"))}
            >
              Learners, Start Here
            </button>
          </NavLink>
        </div>
        <div className="flex basis-3/6 -xsm:mb-5  -md:basis-full -md:w-full ">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/466/991/non_2x/online-education-concept-illustration-study-learning-online-with-laptop-tablet-smartphone-and-headphones-from-home-cozy-online-learing-and-education-with-coffee-and-learning-books-free-png.png"
            alt="img loading error"
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
