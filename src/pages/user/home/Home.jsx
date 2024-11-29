import { GoDotFill } from "react-icons/go";
import "../style sheets/Home.css";
// import Courses from "../Courses";
import Mainpage from "./Mainpage";
//replace this with the all courses data get it from redux store : which will come from db and stored in redux
import { courseCollection } from "../../../Data/data";
import StarRating from "../../../components/StarRating";
import Feedback from "./Feedback";
import CircleComponent from "../../../components/CircleComponent";
import FAQ from "./FAQ";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCurrStatus } from "../../../store/cartSlice";

// import Slider from "../../../components/Slider";

function Home() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // bg-gradient-to-b from-[#f7fbff] to-[#cce7f5]
  return (
    <div className="w-full">
      <Mainpage />
      <CircleComponent />
      {/* <Slider /> */}
      {/* Get all courses from db and just filter the popular ones */}
      {/* <Courses /> */}
      <div
        className={`${
          darkMode ? "bg-[#0f1113] text-white" : "bg-white"
        } flex flex-col items-center gap-5 px-7`}
      >
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
          <p className=" -xsm:text-sm text-xl flex items-center -xsm:text-center">
            <GoDotFill
              className="text-3xl text-green-500 animate-pulse-scale"
              aria-hidden="true"
            />{" "}
            Our comprehensive project based courses
          </p>
        </div>
        {/* get the purchased courses data of that user */}
        {courseCollection
          .filter((course) => course.popular == true)
          .map((course, index) => (
            <div
              key={index}
              className={`${
                index % 2 == 0 ? "flex-row-reverse" : "flex"
              } flex cursor-pointer -sm:flex-col -sm:w-full w-fit gap-6 border-[1px] border-solid border-gray-500 p-4`}
              onClick={() => {
                navigate(`/coursedetails/${course.id}`);
                dispatch(updateCurrStatus("Courses"));
              }}
            >
              <img
                src={course.img}
                alt="img loading error"
                className="w-[25rem] -l:w-[18rem] -md:w-[15rem] -sm:w-full"
              />
              <div className="w-[30rem] -md:w-[25rem] -sm:w-full flex flex-col gap-2">
                <h1 className="text-xl -sm:text-lg font-semibold">
                  {course.title}
                </h1>
                <p className=" text-xs">{course.decription}</p>
                <p className="text-gray-500 text-xs">By {course.instructor}</p>
                <p className="text-green-800 text-xs -xsm:text-[8px] font-semibold flex  ">
                  {course.chapters.length} Chapter or Sections
                  <p className="text-gray-500 font-normal">
                    - {course.lectures} Lectures -
                  </p>
                  <p className="text-gray-500 font-normal">All Levels</p>
                </p>
                <div className="flex items-center gap-1">
                  <p className="font-semibold text-sm">{course.rating}.0</p>
                  <StarRating rating={course.rating} />
                  <p className="text-xs">({course.students})</p>
                </div>
                <p className=" font-semibold">
                  {course.new_price == 0 ? "Free" : `$${course.new_price}`}
                  &nbsp;{" "}
                  <del className="text-red-500 text-sm font-semibold">
                    ${course.old_price}
                  </del>
                </p>
                <p className="px-2 py-1 text-[#0c4b0c] font-semibold text-xs w-fit rounded-sm bg-[#eceb98]">
                  Top Rated
                </p>
              </div>
            </div>
          ))}
      </div>
      {/* call the backend api for feedbacks , feedbacks will store in database */}
      <Feedback />
      {/* call the backend api for FAQs  , feedbacks will store in database */}
      <FAQ />
    </div>
  );
}

export default Home;
