/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
//replace this with the purchased courses data of the user
import { courseCollection } from "../../../Data/data";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { useSelector } from "react-redux";

function Lms() {
  const { id } = useParams();
  const course = courseCollection.find((course) => course.id == id);
  const [active, setActive] = useState("overview");
  const [activeChapter, setActiveChapter] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const darkMode = useSelector((state) => state.store.darkMode);

  if (!course) return <p>Course not found.</p>;

  function renderComponents() {
    if (active == "overview")
      return (
        <Overview
          selectedLecture={selectedLecture}
          instructor={course.instructor}
        />
      );
    if (active == "QA") return <QA />;
    if (active == "notes") return <Notes />;
    if (active == "contents")
      return (
        <CourseContents
          course={course}
          darkMode={darkMode}
          activeChapter={activeChapter}
          setActiveChapter={setActiveChapter}
          setSelectedLecture={setSelectedLecture}
          setSelectedVideo={setSelectedVideo}
        />
      );
  }

  return (
    <div className="bg-gray-800 w-full h-fit p-4 -xsm:p-0  ">
      <div className="flex w-full h-[100vh] bg-white  rounded-2xl ">
        <div className="-md:hidden course-contents h-screen overflow-auto bg-gray-100 -n:w-[45%] w-[40%] rounded-tl-2xl rounded-bl-2xl px-5 py-5">
          <div>
            <h1 className=" font-semibold mb-3">Course Contents</h1>
            {course.chapters.map((chapter, index) => (
              <div key={index} className="flex flex-col mb-2">
                <button
                  onClick={() =>
                    setActiveChapter(activeChapter === index ? null : index)
                  }
                  className={`${
                    darkMode ? "bg-[#313131]" : ""
                  } text-[15px] shadow-md bg-white rounded-sm -xsm:text-xs flex justify-between py-5 -xsm:py-3  w-full text-left  p-3 `}
                >
                  <p className="-n:text-sm">
                    {index + 1} &nbsp; {chapter.title}
                  </p>
                  <div className="flex items-center">
                    <p>{chapter.lectures.length} Lectures </p>
                    <MdArrowDropDown className="text-xl" />
                  </div>
                </button>
                {activeChapter === index && (
                  <div
                    className={`${
                      darkMode ? "bg-[#232323] text-white" : "bg-white"
                    }  `}
                  >
                    {chapter.lectures.map((lecture, idx) => (
                      <button
                        key={idx}
                        //lectures not avaialble for non premimun students
                        onClick={() => {
                          setSelectedVideo(lecture.url);
                          setSelectedLecture(lecture.title);
                        }}
                        className=" cursor-pointer hover:bg-[#e1e0e0] w-full flex flex-col py-3 pl-6  "
                      >
                        <div className="flex  text-sm  items-center gap-2 ">
                          <p>
                            {index + 1}.{idx + 1} &nbsp;
                          </p>
                          <MdOndemandVideo />
                          <p className="-xsm:text-xs">{lecture.title}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="-md:w-full flex flex-col lecture-section h-screen   -n:w-[55%] w-[70%] py-5 px-7 -xsm:px-4">
          <div className="player bg-gray-200 rounded-3xl w-[80%] -n:w-full md:h-[60vh] -md:h-[40vh]"></div>
          <div className="navbar w-full flex gap-5 border-b-2 py-3 text-sm -xsm:text-xs">
            <NavLink onClick={() => setActive("overview")}>Overview</NavLink>
            <NavLink
              onClick={() => setActive("contents")}
              className={"-md:flex hidden"}
            >
              Contents
            </NavLink>
            <NavLink onClick={() => setActive("QA")}>Q&A</NavLink>
            <NavLink onClick={() => setActive("notes")}>Notes</NavLink>
          </div>
          <div className=" md:h-[40vh] -md:h-[60vh] overflow-scroll ">
            {renderComponents()}
          </div>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Overview({ selectedLecture, instructor }) {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h1 className=" font-semibold text-lg -xsm:text-sm">
        Lecture Title: {selectedLecture}
      </h1>
      <h1 className="text-sm -xsm:text-xs">{instructor}</h1>
    </div>
  );
}

function CourseContents({
  darkMode,
  course,
  activeChapter,
  setSelectedLecture,
  setActiveChapter,
  setSelectedVideo,
}) {
  return (
    <div>
      <div>
        <h1 className=" font-semibold mb-3 pt-5">Course Contents</h1>
        {course.chapters.map((chapter, index) => (
          <div key={index} className="flex flex-col mb-2">
            <button
              onClick={() =>
                setActiveChapter(activeChapter === index ? null : index)
              }
              className={`${
                darkMode ? "bg-[#313131]" : " bg-gray-50"
              } text-[15px] shadow-md  rounded-sm -xsm:text-xs flex justify-between py-3 -xsm:py-3  w-full text-left  p-3 `}
            >
              <p>
                {index + 1} &nbsp; {chapter.title}
              </p>
              <div className="flex items-center">
                <p>{chapter.lectures.length} Lectures </p>
                <MdArrowDropDown className="text-xl" />
              </div>
            </button>
            {activeChapter === index && (
              <div
                className={`${
                  darkMode ? "bg-[#232323] text-white" : "bg-white"
                }  `}
              >
                {chapter.lectures.map((lecture, idx) => (
                  <button
                    key={idx}
                    //lectures not avaialble for non premimun students
                    onClick={() => {
                      setSelectedVideo(lecture.url);
                      setSelectedLecture(lecture.title);
                    }}
                    className=" cursor-pointer hover:bg-[#e1e0e0] w-full flex flex-col py-3 pl-6  "
                  >
                    <div className="flex  text-sm  items-center gap-2 ">
                      <p>
                        {index + 1}.{idx + 1} &nbsp;
                      </p>
                      <MdOndemandVideo />
                      <p className="-xsm:text-xs">{lecture.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function QA() {
  return <div>QA</div>;
}
function Notes() {
  return <div>Notes</div>;
}

export default Lms;
