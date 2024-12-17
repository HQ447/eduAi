import { SlMagnifier } from "react-icons/sl";
//replace this with the all courses data taken from db
//Retrive all courses from DB in useEffect , and then dispatch it into redux store to prevent api calls
import { courseCollection } from "../../Data/data";
import { useState } from "react";
// import StarRating from "../../components/StarRating";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

function ManageCourses() {
  const [searchInp, setSearchInp] = useState("");

  // Filter logic
  const filteredCourses = courseCollection.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchInp.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center -xsm:p-0  gap-2 py-2 px-2 rounded-full bg-white">
          <SlMagnifier />
          <input
            type="text"
            placeholder="Search now"
            className="text-xs  bg-white placeholder:text-[#7f7f7f]  placeholder:text-xs  outline-none"
            onChange={(e) => setSearchInp(e.target.value)}
          />
        </div>
        <button className="text-xs -xsm:text-[10px] bg-[#464646] hover:scale-95 transition-all px-3 -xsm:px-2  w-fit py-2 rounded-md text-white">
          Add new Course
        </button>
      </div>

      <div className=" flex flex-wrap justify-evenly gap-4">
        {filteredCourses.map((obj) => (
          <div
            key={obj.id}
            className={`flex relative   p-[14px] -xsm:p-[10px] bg-white w-48 -xsm:w-[10rem] !text-xs  flex-col -xsm:text-sm   shadow transition-all
            `}
          >
            {/* <div className="absolute  hover:scale-95 transition-all cursor-pointer top-5 -xsm:top-4 right-5 -xsm:right-3 border px-2 py-2 bg-white rounded-md">
              <ImBin className="   text-lg -xsm:text-xs text-[red]" />
            </div>
            <div className="absolute  hover:scale-95 transition-all cursor-pointer top-16 -xsm:top-12 right-5 -xsm:right-3 border px-2 py-2 bg-white rounded-md">
              <FaRegEdit className="   text-lg -xsm:text-xs " />
            </div> */}

            <img
              src={obj.img}
              className="w-full "
              alt="cource img loading error "
            />
            <div className="pt-3 flex flex-col gap-2">
              <h1 className=" text-black font-semibold -xsm:text-[10px]">
                {obj.title}
              </h1>
              {/* <p className="text-xs text-[#515151]">{obj.decription}</p> */}
              {/* <p className="text-xs text-green-800">{obj.instructor}</p> */}
              <p className="text-[10px] text-gray-400 -xsm:text-[10px]">
                {obj.chapters.length} Sections - {obj.lectures.length} Lectures
              </p>
              {/* <div className="flex items-center text-xs">
                <h1 className="font-semibold text-xs">{obj.rating}.0</h1>
                &nbsp;
                <StarRating rating={obj.rating} />
                &nbsp;
                <p>({obj.students})</p>
              </div> */}
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm -xsm:text-[10px]">
                  {obj.new_price == 0 ? "Free" : `$${obj.new_price}`}
                </p>
              </div>
              <div className="flex w-full gap-2 justify-between">
                <button className="hover:bg-[#252525] hover:!text-white hover:scale-95 transition-all w-full justify-center py-1 -xsm:text-[8px] rounded-md flex gap-1  bg-[#ececec] ">
                  <FaRegEdit className="   text-sm -xsm:text-xs " />{" "}
                  <p className="text-[10px]">Update</p>
                </button>
                <button className=" hover:bg-[#dd0303] hover:!text-white hover:scale-95 transition-all w-full justify-center  py-1 -xsm:text-[8px] text-[red]  rounded-md flex gap-1 bg-[#ececec] ">
                  <ImBin className="   text-sm -xsm:text-xs " />
                  <p className="text-[10px]">Delete</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCourses;
