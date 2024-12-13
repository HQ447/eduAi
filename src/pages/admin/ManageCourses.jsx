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
        <div className="flex items-center  gap-2 py-2 px-2 rounded-full bg-white">
          <SlMagnifier />
          <input
            type="text"
            placeholder="Search now"
            className="text-xs  bg-white placeholder:text-[#7f7f7f]  placeholder:text-xs  outline-none"
            onChange={(e) => setSearchInp(e.target.value)}
          />
        </div>
        <button className="text-xs bg-[#464646] hover:scale-95 transition-all px-3 py-2 rounded-md text-white">
          Add new Course
        </button>
      </div>

      <div className=" flex flex-wrap gap-2">
        {filteredCourses.map((obj) => (
          <div
            key={obj.id}
            className={`flex relative p-[14px] bg-white w-48 !text-xs -xsm:w-full flex-col -xsm:text-sm   shadow transition-all
            `}
          >
            <div className="absolute  hover:scale-95 transition-all cursor-pointer top-5 right-5 border px-2 py-2 bg-white rounded-md">
              <ImBin className="   text-lg text-[red]" />
            </div>
            <div className="absolute  hover:scale-95 transition-all cursor-pointer top-16 right-5 border px-2 py-2 bg-white rounded-md">
              <FaRegEdit className="   text-lg " />
            </div>

            <img
              src={obj.img}
              className="w-full "
              alt="cource img loading error "
            />
            <div className="pt-3 flex flex-col gap-2">
              <h1 className=" text-black font-semibold">{obj.title}</h1>
              {/* <p className="text-xs text-[#515151]">{obj.decription}</p> */}
              {/* <p className="text-xs text-green-800">{obj.instructor}</p> */}
              <p className="text-[10px] text-gray-400">
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
                <p className="font-semibold text-sm">
                  {obj.new_price == 0 ? "Free" : `$${obj.new_price}`}
                  &nbsp;{" "}
                  <del className="text-red-500 text-sm font-semibold">
                    ${obj.old_price}
                  </del>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageCourses;
