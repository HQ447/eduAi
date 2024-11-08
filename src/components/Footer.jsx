import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Footer() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#101215]" : "text-[#000000b5]"
      } flex flex-col px-20 py-10 gap-5 -md:px-10 -sm:px-6 `}
    >
      <div className="flex justify-between mb-3 flex-wrap gap-10 -sm:px-10 -sm:justify-center">
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-xl font-bold">About</h1>
          <NavLink to={"about"}>
            <h1>Our Story</h1>
          </NavLink>
          <h1>Privacy Policy</h1>
          <h1>FAQs</h1>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-xl font-bold">Quick Links</h1>
          <NavLink to={"courses"}>
            <h1>Courses</h1>
          </NavLink>
          <h1>My Account</h1>
          <h1>Cource Dashboard</h1>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className=" text-xl font-bold">Social Links</h1>
          <h1>Youtube</h1>
          <h1>Instagram</h1>
          <h1>Github</h1>
        </div>
      </div>
      <p className="w-full text-center">
        Copyright © 2024 eduAI | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
