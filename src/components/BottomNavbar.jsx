import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDataset } from "react-icons/md";

function BottomNavbar() {
  return (
    <div className="w-full fixed bottom-0 bg-black text-white text-xs justify-center gap-3 flex py-4">
      <NavLink to={""} className={"flex flex-col"}>
        <IoHomeOutline />
        <p>Home</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col"}>
        <RiTeamLine />
        <p>About</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col"}>
        <IoBookOutline />
        <p>Courses</p>
      </NavLink>
      <NavLink to={""} className={"flex flex-col"}>
        <MdOutlineDataset />
        <p>Resourses</p>
      </NavLink>
    </div>
  );
}

export default BottomNavbar;
