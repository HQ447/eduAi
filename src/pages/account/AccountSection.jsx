import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
  const darkMode = useSelector((state) => state.store.darkMode);
  // Animation Variants
  // const textVariants = {
  //   animate: {
  //     y: [0, -10, 0],
  //     color: ["#000000", "#784aeb", "#000000"],
  //     transition: {
  //       y: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // Loop for the vertical animation
  //       color: { duration: 2, repeat: Infinity, ease: "linear" }, // Loop for the color animation
  //     },
  //   },
  // };

  return (
    <div className="bg-[#dcdcdc] w-full min-h-screen">
      <div className="bg-[#8971c5] relative pb-14 -xsm:pb-8 flex flex-col gap-6 rounded-b-[4rem] -xsm:rounded-b-[2rem]">
        <div
          className={` ${
            darkMode
              ? "bg-[#000000d6] text-white"
              : " bg-white text-[#000000b5] "
          } flex px-20 py-4 justify-center -xsm:py-3 items-center -md:px-10 -sm:px-6 -xsm:px-3  w-full  transition-all`}
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <NavLink to={""} className={"flex items-center gap-1"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
              alt="loading error"
              className="w-6"
            />
            <h1 className="text-xl font-semibold -xsm:text-xl">
              edu
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #455be7 2.34%, #C 100.78%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI
              </span>
            </h1>
          </NavLink>
          <NavLink
            to={"/"}
            className={
              "absolute right-8 -xsm:right-3 text-xs text-white rounded-sm px-2 py-1 bg-[#8971c5]"
            }
          >
            Back
          </NavLink>
        </div>

        <div className="flex flex-col -xsm:my-5 font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3 -xsm:w-16"
          />
          <h1 className="uppercase -xsm:text-sm">{activeUser.username}</h1>
          <p className="text-xl -xsm:text-sm">{activeUser.email}</p>
        </div>
        <div className="absolute w-full bottom-0 gap-7 text-white  flex justify-center  ">
          <p
            className={` ${
              active == 1 ? "border-b-4 border-white" : ""
            } -xsm:text-[10px] `}
            onClick={() => {
              setActive(1);
              navigate("");
            }}
          >
            Learnings
          </p>
          <p
            className={` ${
              active == 2 ? "border-b-4 border-white" : ""
            }  -xsm:text-[10px]`}
            onClick={() => {
              setActive(2);
              navigate("certification");
            }}
          >
            Certification
          </p>
          <p
            className={` ${
              active == 3 ? "border-b-4 border-white" : ""
            }  -xsm:text-[10px] `}
            onClick={() => {
              setActive(3);
              navigate("Settings");
            }}
          >
            Settings
          </p>
        </div>
      </div>

      <div className=" bg-white mt-2 -xsm:mt-2 relative -xsm:py-2 py-12  px-10 -sm:px-16 -xsm:px-7 ">
        <Outlet />
      </div>
    </div>
  );
}

export default AccountSection;
