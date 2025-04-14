import { useState } from "react";
import { NavLink } from "react-router-dom";

function RecoverPassword() {
  const [email, setEmail] = useState();
  console.log(email);

  return (
    <div className="flex items-center justify-center w-full min-h-screen backdrop-blur-sm">
      <div className=" w-[28%] -xl:w-[35%] -lg:w-[45%] -md:w-[60%] -sm:w-[70%] -xsm:w-full -xsm:h-full -xsm:justify-center flex flex-col px-10 py-10 rounded-lg bg-[white] shadow-2xl ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
          alt=""
          className="mx-auto mb-2 rounded-full w-14 h-14"
        />
        <h1 className="mt-3 text-lg font-semibold text-center">
          Recover Your Password!
        </h1>
        <p className="mb-3 text-center text-md">with simple 2 steps</p>
        <div className="flex flex-col gap-4 my-3">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-3 border rounded-md shadow-md outline-none placeholder:text-sm placeholder:text-gray-400"
          />
        </div>
        <NavLink to={"/get-otp"} className={"w-full"}>
          <button className="w-full bg-[#1E3A8A] mb-3 hover:scale-95 transition-all  text-white rounded-md py-2 shadow-md">
            Next
          </button>
        </NavLink>
        <p className="text-[12px] text-center ">
          Back to?{" "}
          <NavLink
            to={"/signup"}
            className={"text-blue-700 hover:font-semibold cursor-pointer"}
          >
            Login
          </NavLink>
        </p>
      </div>

      {/* <div className="flex flex-col items-center justify-center gap-8 px-20 py-10 bg-white rounded-lg w-fit -md:px-16 -sm:px-8 -xsm:px-2 -xsm:py-3 -xsm:w-11/12">

      <h1 className="w-fit text-center shadow-lg rounded-full px-9 py-1 bg-[#fbb329] text-xl ">
        Login
      </h1>
      <div className="flex -sm:flex-wrap">
        <img
          src="https://sindphanapublicschool.com/Assets/img/logo-2.png"
          alt="login imag error"
          className="mx-auto w-60 -md:w-40 -md:h-40"
        />
        <div className="flex flex-col items-center justify-center w-full gap-2 px-5 -xsm:px-0">
          <div className="border-b-2 border-[#fbb329] flex items-center">
            <input
              type="text"
              className="px-1 py-4 outline-none placeholder:text-black placeholder:text-lg"
              placeholder="Email ID"
            />
            <FaUser className="text-3xl" />
          </div>
          <div className="border-b-2 border-[#fbb329] flex items-center">
            <input
              type="password"
              className="px-1 py-4 outline-none placeholder:text-black placeholder:text-lg"
              placeholder="Password"
            />
            <FaLock className="text-3xl" />
          </div>

          <NavLink to={"/"}>
            <button className=" py-2 px-10 my-3 bg-[#fbb329] shadow-md rounded-full">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default RecoverPassword;
