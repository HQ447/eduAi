import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className=" backdrop-blur-sm flex w-full min-h-screen justify-center items-center">
      <div className="w-fit flex flex-col px-3 py-3 rounded-lg  ">
        <h1 className="text-xl font-semibold">Hello!</h1>
        <p>Welcome back</p>
        <div>
          <input type="text" placeholder="Enter Email" />
          <input type="password" placeholder="Password" />
          <p>Recovery Password</p>
        </div>
        <button>Sign in</button>

        <div>
          <p>or continue with</p>
          <div className="flex "></div>
          <p>
            Not a member?<a href="">Register now</a>
          </p>
        </div>
      </div>

      {/* <div className=" w-fit flex justify-center items-center gap-8 flex-col bg-white px-20 -md:px-16 -sm:px-8 -xsm:px-2 -xsm:py-3 py-10 -xsm:w-11/12 rounded-lg">

        <h1 className="w-fit text-center shadow-lg rounded-full px-9 py-1 bg-[#fbb329] text-xl ">
          Login
        </h1>
        <div className="flex -sm:flex-wrap">
          <img
            src="https://sindphanapublicschool.com/Assets/img/logo-2.png"
            alt="login imag error"
            className=" w-60 -md:w-40 -md:h-40 mx-auto "
          />
          <div className=" w-full items-center justify-center gap-2 flex flex-col px-5 -xsm:px-0">
            <div className="border-b-2 border-[#fbb329] flex items-center">
              <input
                type="text"
                className=" py-4 px-1 outline-none placeholder:text-black placeholder:text-lg"
                placeholder="Email ID"
              />
              <FaUser className="text-3xl" />
            </div>
            <div className="border-b-2 border-[#fbb329] flex items-center">
              <input
                type="password"
                className=" py-4 px-1 outline-none placeholder:text-black placeholder:text-lg"
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

export default Login;
