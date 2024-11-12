import { useSelector } from "react-redux";
import { TiMessages } from "react-icons/ti";
import { GiLightningHelix } from "react-icons/gi";
import { FaHashtag } from "react-icons/fa6";
import { Outlet } from "react-router-dom";

function Discussions() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#000000d6] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex flex-col px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      <div className="nav -xsm:py-5 flex justify-around -xsm:flex-wrap -xsm:gap-2">
        <input
          type="text"
          placeholder="search"
          className="py-2 px-4 rounded-lg placeholder:text-gray-400 bg-gray-100"
        />
        <button className="py-2 px-2 rounded-lg bg-indigo-600 text-white">
          Add new post
        </button>
      </div>
      <div className="flex my-10 -xsm:m-1 -xsm:flex-col">
        <div className="Sidebar w-[20%] -xsm:w-full -xsm:border-r-0  text-sm sm:max-h-[30vh] -xsm:h-fit gap-6 border-r-2 flex flex-col px-5 py-3">
          <h1 className="text-lg font-bold">Categories</h1>
          <div className="flex items-center gap-2 cursor-pointer">
            <TiMessages className="" />
            <p>View all Discussions</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaHashtag className="text-blue-600" />
            <p>General</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <GiLightningHelix className="text-yellow-400" />
            <p>Help</p>
          </div>
        </div>
        <div className="flex flex-col px-8 -xsm:py-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Discussions;
