import { GoDotFill } from "react-icons/go";

//replace this with the all courses data taken from db server from backend
//Retrive all courses from DB in useEffect , and then dispatch it into redux store to prevent api calls
//comment the below statment after doing that
import { courseCollection } from "../../Data/data";

import { useSelector } from "react-redux";
import StarRating from "../../components/StarRating";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
//import { updateCourseCollection } from "../../store/cartSlice";

function Courses() {
  const darkMode = useSelector((state) => state.store.darkMode);
  //const courses = useSelector((state) => state.store.courseCollection);
  const navigate = useNavigate();
  const [searchInp, setSearchInp] = useState("");
  const [category, setCategory] = useState("All");
  // eslint-disable-next-line no-unused-vars
  const [level, setLevel] = useState("Intermediate");
  const [priceRange, setPriceRange] = useState(10);
  //const dispatch = useDispatch();

  function clearFilter() {
    setCategory("All");
    setSearchInp("");
    setPriceRange(10);
    setLevel("Intermediate");
  }

  // Filter logic
  const filteredCourses = courseCollection.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchInp.toLowerCase());
    const matchesCategory = category === "All" || course.category === category;
    const matchesPrice = course.new_price <= priceRange;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  // function test() {
  //   const testArr = [{ name: "testing array", project: "fpy" }];
  //   dispatch(updateCourseCollection(testArr));
  // }
  // test();
  // console.log(courses[0].name);

  //call the api here to get all courses form backend and dispatch it from redux store
  // useEffect(() => {
  //   //1. api call

  //   //2.distptch it to redux store
  //   dispatch(updateCourseCollection("api responcce"))
  // });

  return (
    <div
      className={` ${
        darkMode ? "bg-[#0f1113] text-white " : ""
      } flex flex-col gap-2 px-20 -md:px-10 -sm:px-6 pb-5 -xsm:px-3 pt-7 `}
    >
      <div
        className={`${
          darkMode ? "bg-[#232323] " : " "
        }  rounded-lg shadow-md py-2 !px-2 -md:flex-col filter-ribbon w-full justify-center flex items-center gap-3`}
      >
        <div className=" w-[25rem] -md:w-full ">
          <input
            type="text"
            value={searchInp}
            onChange={(e) => setSearchInp(e.target.value)}
            placeholder="Search Course By Name"
            className={` ${
              darkMode ? "bg-[#2f343c] text-white " : "bg-gray-100 "
            } -xsm:text-xs  outline-none rounded-md p-2 text-sm placeholder:text-[10px] w-full`}
          />
        </div>
        <div className="flex items-center justify-around gap-3 -md:w-full -xsm:flex-wrap w-fit">
          <select
            name="select-company"
            id=""
            className={` ${
              darkMode
                ? "bg-[#2f343c] text-white border-0 "
                : "bg-gray-100 border-none "
            } outline-none -xsm:text-[9px]  w-[9rem] -xsm:w-[7rem] py-2 rounded-md text-xs`}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">Select Category</option>
            <option value="IT">IT Courses</option>
            <option value="Academic">Academic Courses</option>
            <option value="Exams Preps">Exam Special Courses</option>
            <option value="Logical Tests Preps">
              Logical Test Prep Courses
            </option>
          </select>
          <select
            name="select-company"
            id=""
            className={` ${
              darkMode ? "bg-[#2f343c] text-white border-0" : "bg-gray-100 "
            } -xsm:text-[9px] outline-none w-[7rem] -xsm:w-[6rem]   py-2 rounded-md text-xs`}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="">Course Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advance">Advance</option>
          </select>
          <div className="flex flex-col w-[8rem] -xsm:hidden  ">
            <p className="my-2 text-xs "> Less than ${priceRange}</p>
            <input
              type="range"
              name=""
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              maxLength={100}
              minLength={0}
              id=""
              className="w-full mr-3"
            />
          </div>
          <button
            className="w-fit -xsm:px-2 -xsm:py-[4px]  -xsm:text-[10px] text-sm py-[6px] transition-all hover:scale-95 active:bg-red-700 px-4  bg-red-600 rounded-md text-white "
            onClick={clearFilter}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {/* <p className="w-full text-xs text-center">
          {searchInp} &nbsp;-&nbsp;
          {category}&nbsp;-&nbsp;
          {level}&nbsp;-&nbsp;
          {priceRange}
        </p> */}
        <div className="flex flex-col items-center justify-center mb-5">
          <h1
            className={` -xsm:text-xl w-full text-center text-3xl font-[600] mb-1 mt-2 `}
          >
            {category}{" "}
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
          <p className="flex items-center gap-3 text-lg -xsm:text-xs -xsm:text-center">
            <GoDotFill
              className="text-3xl text-green-500 border-2 rounded-full -xsm:hidden animate-pulse-scale "
              aria-hidden="true"
            />{" "}
            Our comprehensive project based courses
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 -xsm:px-3">
          {filteredCourses.map((obj) => (
            <div
              key={obj.id}
              className={`${
                darkMode
                  ? "bg-[#21262a] text-white  "
                  : "bg-white border border-black  text-[#000000b5] "
              } flex p-[14px]   w-72 -xsm:w-full flex-col -xsm:text-sm  cursor-pointer hover:scale-95 hover:shadow-xl transition-all
            `}
              onClick={() => {
                navigate(`/coursedetails/${obj.id}`);
              }}
            >
              <img
                src={obj.img}
                className="w-full "
                alt="cource img loading error "
              />
              <div className="flex flex-col gap-2 pt-3">
                <h1
                  className={` ${
                    darkMode ? "text-[#eeeeee]" : " text-black"
                  } text-[15px] -xsm:text-sm  font-semibold`}
                >
                  {obj.title}
                </h1>
                <p
                  className={`${
                    darkMode ? "text-[#dcdcdc]" : ""
                  }  text-xs text-[#515151]`}
                >
                  {obj.decription}
                </p>
                <p className="text-xs text-green-800">{obj.instructor}</p>
                <p className="text-[10px] text-gray-400">
                  {obj.chapters.length} Sections - {obj.lectures.length}{" "}
                  Lectures
                </p>
                <div className="flex items-center text-sm">
                  <h1 className="text-sm font-semibold">{obj.rating}.0</h1>
                  &nbsp;
                  <StarRating rating={obj.rating} />
                  &nbsp;
                  <p>({obj.students})</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    {obj.new_price == 0 ? "Free" : `$${obj.new_price}`}
                    &nbsp;{" "}
                    <del className="text-sm font-semibold text-red-500">
                      ${obj.old_price}
                    </del>
                  </p>
                  <IoMdHeartEmpty className="text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
