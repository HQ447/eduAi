import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);
  const navigate = useNavigate();
  const [active, setActive] = useState(1);
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
      <div className="bg-[#784aeb] pb-20 -xsm:pb-5 flex flex-col rounded-b-[4rem] -xsm:rounded-b-[2rem]">
        <div className="Nav flex justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4 -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>

        <div className="flex flex-col font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3 -xsm:w-16"
          />
          <h1 className="uppercase -xsm:text-sm">{activeUser.username}</h1>
          <p className="text-xl -xsm:text-sm">{activeUser.email}</p>
        </div>
      </div>

      <div className="rounded-t-[4rem] -xsm:rounded-t-[2rem] bg-white mt-3 -xsm:mt-2 relative -xsm:py-2 py-12  px-10 -sm:px-16 -xsm:px-7 ">
        <div className="absolute gap-1 -md:w-[80%] -sm:w-[86%] -xsm:relative -xsm:justify-between -xsm:py-4 -xsm:mb-6 -xsm:top-0 -xsm:w-[95%] flex justify-between rounded-md -top-12 left-0 right-0 shadow-lg shadow-[#c2c2c2] mx-auto py-5 px-7 w-[60%] bg-white">
          <p
            className={` ${
              active == 1 ? "border-b-2 border-[#784aeb]" : ""
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
              active == 2 ? "border-b-2 border-[#784aeb]" : ""
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
              active == 3 ? "border-b-2 border-[#784aeb]" : ""
            }  -xsm:text-[10px] `}
            onClick={() => {
              setActive(3);
              navigate("Settings");
            }}
          >
            Settings
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AccountSection;
