import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setactiveUser } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.store.users);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const copyloginData = { ...loginData };
    copyloginData[name] = value;
    setLoginData(copyloginData);
  }

  function handleClick() {
    const { email, password } = loginData;

    if (!email || !password) {
      alert("Please fill in all fields before login.");
      return;
    }

    //we will find the user by calling the backend api for findinguser , and after

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      //when user found successfully we get that user response and dispatch it to active user
      //and navigate to the main page
      console.log(foundUser);
      dispatch(setactiveUser(foundUser));
      navigate("/");
    } else {
      alert("No user found plz regester yourself");
    }
  }
  return (
    <div className=" backdrop-blur-sm flex w-full min-h-screen justify-center items-center">
      <div className=" w-[28%] -xl:w-[35%] -lg:w-[45%] -md:w-[60%] -sm:w-[70%] -xsm:w-full -xsm:h-full -xsm:justify-center flex flex-col px-10 py-10 rounded-lg bg-[white] shadow-2xl ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
          alt=""
          className="w-14 h-14 rounded-full mb-2 mx-auto"
        />
        <h1 className="text-2xl text-center font-semibold">Hello!</h1>
        <p className="text-md text-center">Welcome back</p>
        <div className="flex flex-col my-3 gap-4">
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => handleChange(e)}
            className="bg-[] shadow-lg px-3   outline-none  py-3 placeholder:text-sm rounded-md placeholder:text-gray-400"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            className="shadow-lg outline-none  px-3 py-3 placeholder:text-sm rounded-md placeholder:text-gray-400"
          />
          <p className=" text-end text-[12px] font-semibold">
            <NavLink to={"/recover-password"}> Recover Your Password</NavLink>
          </p>
        </div>
        <button
          onClick={handleClick}
          className="w-full bg-[#653bce] mb-3 hover:scale-95 transition-all hover:bg-orange-600 text-white rounded-md py-2 shadow-md"
        >
          Sign in
        </button>

        <div>
          <p className="text-[12px] text-center">or continue with</p>
          <div className="flex justify-around my-3">
            <FcGoogle className="shadow-lg text-5xl px-3 rounded-md hover:scale-75 transition-all hover:bg-white cursor-pointer" />
            <FaFacebook className="shadow-lg text-5xl  px-3 rounded-md hover:scale-75 transition-all hover:bg-white cursor-pointer" />
            <FaGithub className="shadow-lg text-5xl  px-3 rounded-md hover:scale-75 transition-all hover:bg-white cursor-pointer" />
          </div>
          <NavLink
            to={"/adminlogin"}
            className={"text-[12px] text-center hover:text-blue-700"}
          >
            <p className="mb-2">Login as Admin?</p>
          </NavLink>
          <p className="text-[12px] text-center">
            Not a member?{" "}
            <NavLink to={"/signup"} className={"text-blue-700"}>
              Register now
            </NavLink>
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
