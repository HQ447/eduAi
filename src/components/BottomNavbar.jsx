import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDataset } from "react-icons/md";

function BottomNavbar() {
  return (
    <div className="w-full fixed bottom-0 bg-black text-white text-xs justify-center gap-6 flex py-2">
      <NavLink to={""} className={"flex flex-col justify-center items-center"}>
        <IoHomeOutline className="text-lg" />
        <p>Home</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col justify-center items-center"}>
        <RiTeamLine className="text-lg" />
        <p>About</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col justify-center items-center"}>
        <IoBookOutline className="text-lg" />
        <p>Courses</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col justify-center items-center"}>
        <MdOutlineDataset className="text-lg" />
        <p>Resourses</p>
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
