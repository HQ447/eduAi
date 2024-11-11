import { NavLink, Outlet } from "react-router-dom";

function Resources() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 py-3">
        <NavLink to={""}>Discussions</NavLink>
        <NavLink to={"sourcecode"}>Source Code</NavLink>
        <NavLink to={"guidline"}>Guidlines</NavLink>
        <NavLink to={"blogs"}>Blogs</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Resources;
