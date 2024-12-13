import { SlMagnifier } from "react-icons/sl";

function ManageCourses() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center  gap-2 py-2 px-2 rounded-full bg-white">
          <SlMagnifier />
          <input
            type="text"
            placeholder="Search now"
            className="text-xs  bg-white placeholder:text-[#7f7f7f]  placeholder:text-xs  outline-none"
          />
        </div>
        <button className="text-xs bg-[#464646] hover:scale-95 transition-all px-3 py-[5px] rounded-md text-white">
          Add new Course
        </button>
      </div>
    </div>
  );
}

export default ManageCourses;
