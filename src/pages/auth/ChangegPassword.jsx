import { NavLink } from "react-router-dom";

function ChangePassword() {
  return (
    <div className=" backdrop-blur-sm flex w-full min-h-screen justify-center items-center">
      <div className=" w-[28%] -xl:w-[35%] -lg:w-[45%] -md:w-[60%] -sm:w-[70%] -xsm:w-full -xsm:h-full -xsm:justify-center flex flex-col px-10 py-10 rounded-lg bg-[white] shadow-2xl ">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Student_icon.svg/1024px-Student_icon.svg.png"
          alt=""
          className="w-14 h-14 rounded-full mb-2 mx-auto"
        />
        <h1 className="text-lg text-center font-semibold mt-3">
          Change Your Password!
        </h1>
        <p className="text-sm text-center mb-3">
          Give a Strong and Secure Password
        </p>
        <div className="flex flex-col my-3 gap-4">
          <input
            type="password"
            placeholder="Enter new Password"
            className="bg-white px-3   outline-none  py-3 placeholder:text-sm rounded-md placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-white outline-none  px-3 py-3 placeholder:text-sm rounded-md placeholder:text-gray-400"
          />
        </div>
        <NavLink to={"/login"} className={"w-full"}>
          <button className="w-full bg-[#653bce] mb-3 hover:scale-95 transition-all hover:bg-orange-600 text-white rounded-md py-2 shadow-md">
            Update
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ChangePassword;
