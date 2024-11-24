import { GoDotFill } from "react-icons/go";

//replace this with the all courses data taken from db
//Retrive all courses from DB in useEffect , and then dispatch it into redux store to prevent api calls
import { courseCollection } from "../../Data/data";
import { useSelector } from "react-redux";
import StarRating from "../../components/StarRating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Courses() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const navigate = useNavigate();
  const [searchInp, setSearchInp] = useState("");
  const [category, setCategory] = useState();
  const [level, setLevel] = useState("");
  const [priceRange, setPriceRange] = useState(10);

  function clearFilter() {
    setCategory("");
    setSearchInp("");
    setPriceRange(10);
    setLevel("");
  }

  return (
    <div
      className={` ${
        darkMode ? "bg-[#101215] text-white " : "bg-[#f1f3f4]"
      } flex gap-2 px-20 -md:px-10 -sm:px-6 pb-5 -xsm:px-3 pt-10 `}
    >
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] mb-5 -xsm:mb-1 ">
            Popular{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Courses
            </span>
          </h1>
          <p className=" -xsm:text-sm text-xl flex gap-3 items-center -xsm:text-center">
            <GoDotFill
              className="text-3xl text-green-500 rounded-full animate-pulse-scale border-2 "
              aria-hidden="true"
            />{" "}
            Our comprehensive project based courses
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 -xsm:px-2">
          {courseCollection.map((obj) => (
            <div
              key={obj.id}
              className={`${
                darkMode
                  ? "bg-[#242424] text-white "
                  : "bg-white text-[#000000b5] "
              } flex p-[14px] border-2 w-72 -xsm:w-full rounded-lg flex-col -xsm:text-sm  cursor-pointer hover:scale-105 hover:shadow-xl transition-all
            `}
              onClick={() => navigate(`/coursedetails/${obj.id}`)}
            >
              <img
                src={obj.img}
                className="w-full rounded-md"
                alt="cource img loading error "
              />
              <div className="py-3 flex flex-col gap-2">
                <h1 className=" text-md font-semibold">{obj.title}</h1>
                <p className="text-xs text-green-800">{obj.instructor}</p>
                <p className="text-xs">{obj.decription}</p>
                <div className="flex items-center text-sm">
                  <h1>{obj.rating}.0</h1>
                  &nbsp;
                  <StarRating rating={obj.rating} />
                  &nbsp;
                  <p>({obj.students})</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">
                    {obj.new_price == 0 ? "Free" : `$${obj.new_price}`}
                    &nbsp;{" "}
                    <del className="text-red-500 text-sm font-semibold">
                      ${obj.old_price}
                    </del>
                  </p>
                  <p className="text-sm">{obj.lectures} Lectures</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="filteration-container flex-col gap-2 bg-white p-2 rounded-xl h-[70vh]">
        <div className="border-2">
          <p>Seach By Name</p>
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-md"
            name="courseName"
            placeholder="MERN Stack"
            id=""
          />
        </div>
      </div> */}
      <div
        className={`sidebar gap-2 p-3 w-[20rem] h-fit box-shadow  bg-white rounded-xl  flex flex-col  items-center `}
      >
        {/* <RxCross2
          className="
        hidden -lg:flex text-2xl "
          onClick={() => setshowSidebar(false)}
        /> */}
        <input
          type="text"
          placeholder="Search Course By Name"
          className=" w-11/12 px-3 py-2 rounded-md  bg-transparent border-2 outline-none placeholder:text-xs text-xs"
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          name=""
          id=""
        />
        <div className="w-full flex flex-col gap-2  ">
          <h1 className="w-full py-1 text-md rounded-lg bg-[#ccf0e7] px-3 font-bold">
            Select Category
          </h1>
          <h1
            onClick={() => setCategory("IT-courses")}
            className=" cursor-pointer text-xs ml-3 hover:font-bold"
          >
            IT Courses
          </h1>
          <h1
            onClick={() => setCategory("academic-courses")}
            className=" cursor-pointer text-xs  ml-3 hover:font-bold"
          >
            Academic Courses
          </h1>
          <h1
            onClick={() => setCategory("exams-courses")}
            className=" cursor-pointer text-xs  ml-3 hover:font-bold"
          >
            {`Exam Special Courses`}
          </h1>
          <h1
            onClick={() => setCategory("test-couses")}
            className=" cursor-pointer text-xs  ml-3 hover:font-bold"
          >
            {`Other Local Tests `}
          </h1>
        </div>
        <div className="company w-full my-3 flex flex-col  gap-4  items-center">
          <h1 className="w-full  py-1 text-md bg-[#ccf0e7] rounded-lg px-3 font-bold">
            Course Level
          </h1>

          <select
            name="select-company"
            id=""
            className=" w-full border-2 px-3 py-2 rounded-md text-xs"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
        </div>
        <div className="  w-full ">
          <h1 className="w-full  bg-[#ccf0e7] py-1 text-md rounded-lg px-3 font-bold">
            Price Range
          </h1>
          <p className=" my-2 text-xs"> Less than ${priceRange}</p>
          <input
            type="range"
            name=""
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            maxLength={100}
            minLength={0}
            id=""
            className="mr-3 w-full slider"
          />
        </div>
        <button
          className="w-full transition-all hover:scale-95 active:bg-red-700 px-3 py-2 bg-red-600 rounded-md text-white "
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}

export default Courses;
