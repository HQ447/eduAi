import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import StarRating from "../../components/StarRating";
import { courseCollection } from "../../Data/data";
import { AiOutlineClose } from "react-icons/ai";
import { LuCheckCheck } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { useSelector } from "react-redux";

function CourseDetail() {
  const { id } = useParams();
  const course = courseCollection.find((course) => course.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const darkMode = useSelector((state) => state.store.darkMode);

  if (!course) return <p>Course not found.</p>;

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#101215] text-white "
          : "bg-gradient-to-b from-[#f5faff] to-[#cce7f5]"
      } px-20 -md:px-10 -sm:px-6 py-6 min-h-screen flex -sm:flex-col-reverse `}
    >
      {/* Chapter List Section */}
      <div className="flex -sm:pr-0 -sm:mt-[40px] -sm:w-full flex-col -sm:min-h-fit overflow-y-scroll max-h-screen -md:w-[60%] w-[65%] pr-5">
        <h1 className="text-2xl -md:text-2xl -xsm:text-xl font-bold mb-5 -lg:text-3xl">
          {course.title}
        </h1>
        <div className="flex items-center gap- mb-4">
          <StarRating rating={course.rating} />
          <p className="text-sm">{course.rating}/5</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold">
            What you will learn from this course?
          </h1>
          {course.learnings.map((message, indexx) => (
            <div className="pl-2 -xsm:p-0 flex gap-2" key={indexx}>
              <LuCheckCheck className="" />
              <p className="text-sm">{message}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 my-6 ">
          <h1 className="text-lg font-semibold">
            What you will learn from this course?
          </h1>
          {course.prerequisites.map((message, indexx) => (
            <div className="pl-2 -xsm:p-0 flex gap-2" key={indexx}>
              <LuCheckCheck className="" />
              <p className="text-sm">{message}</p>
            </div>
          ))}
        </div>

        {course.chapters.map((chapter, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() =>
                setActiveChapter(activeChapter === index ? null : index)
              }
              className={`${
                darkMode ? "bg-[#313131]" : "bg-[#f4f6f9f0]"
              } text-[15px] -xsm:text-xs flex justify-between py-5 -xsm:py-3  w-full text-left  shadow-lg p-3 rounded-lg`}
            >
              <p>{chapter.title}</p>
              <div className="flex items-center">
                <p>{chapter.lectures.length} Lectures </p>
                <MdArrowDropDown className="text-xl" />
              </div>
            </button>
            {activeChapter === index && (
              <div className="pl-5 mt-2">
                {chapter.lectures.map((lecture, idx) => (
                  <button
                    key={idx}
                    //lectures not avaialble for non premimun students
                    //onClick={() => setSelectedVideo(lecture.url)}
                    className=" cursor-pointer flex flex-col mb-2  "
                  >
                    <div className="flex text-sm  items-center gap-2">
                      <MdOndemandVideo />
                      <p className="-xsm:text-xs">{lecture.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="my-3 flex gap-2 items-center">
          <StarRating rating={course.rating} />
          <p>{course.rating} Course Ratings</p>
        </div>
      </div>

      {/* Fixed Course Details Section */}
      <div className="-sm:w-full -xsm:p-1  -sm:relative w-[35%] -md:w-[40%] sticky top-5 h-fit flex flex-col gap-3 p-4">
        <img
          src={course.img}
          alt="Course Image"
          className="w-full rounded-lg"
        />
        <h1 className="text-2xl font-semibold">
          {course.new_price == 0 ? "Free" : `$${course.new_price}`}
        </h1>
        <button className="px-5 w-full py-2 bg-[#dc143c] text-sm font-semibold text-white rounded-full">
          Buy Now ${course.new_price}
        </button>
        <ul className="px-4 -xsm:px-2 list-disc text-sm space-y-1">
          <li>30 days money-back guarantee</li>
          <li>Source code included</li>
          <li>Lifetime Access</li>
          <li>Premium Access</li>
        </ul>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative bg-white rounded-lg p-5 w-11/12 max-w-2xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <ReactPlayer
              url={selectedVideo}
              controls
              width="100%"
              height="400px"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
