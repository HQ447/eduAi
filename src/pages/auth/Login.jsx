import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setactiveUser } from "../../store/cartSlice";

function Login() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const users = useSelector((state) => state.store.users);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    const copyloginData = { ...loginData };
    copyloginData[name] = value;
    setLoginData(copyloginData);

    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  }

  function handleClick() {
    const { email, password } = loginData;

    if (!email && !password) {
      setError("Please enter both email and password");
      return;
    } else if (!email) {
      setError("Please enter your email");
      return;
    } else if (!password) {
      setError("Please enter your password");
      return;
    }

    // If we get here, both fields are filled
    dispatch(setactiveUser(loginData));
    navigate("/");

    //we will find the user by calling the backend api for findinguser , and after
  }
  return (
    <div className="flex items-center justify-center w-full min-h-screen backdrop-blur-sm">
      <div className=" w-[28%] -xl:w-[35%] -lg:w-[45%] -md:w-[60%] -sm:w-[70%] -xsm:w-full -xsm:h-full -xsm:justify-center flex flex-col px-10 py-10 rounded-lg bg-[white] shadow-2xl ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
          alt=""
          className="mx-auto mb-2 rounded-full w-14 h-14"
        />
        <h1 className="text-2xl font-semibold text-center">Hello!</h1>
        <p className="text-center text-md">Welcome back</p>
        <div className="flex flex-col gap-4 my-3">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
            className="px-3 py-3 text-xs border rounded-md shadow-md outline-none placeholder:text-sm placeholder:text-gray-400"
          />
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            className="px-3 py-3 text-xs border rounded-md shadow-md outline-none placeholder:text-sm placeholder:text-gray-400"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <p className=" text-end text-[12px] font-semibold">
            <NavLink to={"/recover-password"}> Recover Your Password</NavLink>
          </p>
        </div>
        <button
          onClick={handleClick}
          className="w-full  mb-3 hover:scale-95 transition-all bg-[#1E3A8A] text-white rounded-md py-2 shadow-md"
        >
          Sign in
        </button>

        <div>
          <p className="text-[12px] text-center">or continue with</p>
          <div className="flex justify-around my-3">
            <FcGoogle className="px-3 text-5xl transition-all rounded-md shadow-lg cursor-pointer hover:scale-75 hover:bg-white" />
            <FaFacebook className="px-3 text-5xl transition-all rounded-md shadow-lg cursor-pointer hover:scale-75 hover:bg-white" />
            <FaGithub className="px-3 text-5xl transition-all rounded-md shadow-lg cursor-pointer hover:scale-75 hover:bg-white" />
          </div>
          <NavLink
            to={"/adminlogin"}
            className={"text-[12px] text-center hover:text-blue-700"}
          >
            <p className="mb-2 text-blue-700 underline cursor-pointer hover:font-semibold">
              Login as Admin?
            </p>
          </NavLink>
          <p className="text-[12px] text-center ">
            Not a member?{" "}
            <NavLink
              to={"/signup"}
              className={"text-blue-700 hover:font-semibold cursor-pointer"}
            >
              Register now
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
