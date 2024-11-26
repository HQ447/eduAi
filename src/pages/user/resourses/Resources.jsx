import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

function Resources() {
  const darkModeFromRedux = useSelector((state) => state.store.darkMode);
  return (
    <div className="flex flex-col">
      <div
        className={` ${
          darkModeFromRedux
            ? "bg-[#000000d6] text-white"
            : " bg-[white] text-[#000000b5] "
        } flex  px-20 -xsm:text-[0.7rem] -xsm:gap-4 gap-10 py-4 -xsm:py-3 text-sm -md:px-10 -sm:px-6 bg-opacity-50   w-full backdrop-blur-lg `}
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <NavLink to={""}>Source Code</NavLink>
        <NavLink to={"discussions"}>Discussions</NavLink>
        <NavLink to={"guidlines"}>Guidlines</NavLink>
        <NavLink to={"blogs"}>Blogs</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Resources;
