import { SlMagnifier } from "react-icons/sl";

function ManageCourses() {
  return (
    <div>
      <div className="flex items-center ">
        <div className="flex items-center gap-2 py-2 px-2 rounded-full bg-[#edf1fc]">
          <SlMagnifier />
          <input
            type="text"
            placeholder="Search now"
            className="text-xs bg-[#edf1fc] placeholder:text-[#7f7f7f]  placeholder:text-xs  outline-none"
          />
        </div>
      </div>
    </div>
  );
}

export default ManageCourses;
