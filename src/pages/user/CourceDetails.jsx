import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import { courseCollection } from "../../Data/data";
import { AiOutlineClose } from "react-icons/ai";

function CourseDetail() {
  const { id } = useParams();
  const course = courseCollection.find((course) => course.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="px-10 py-5 h-screen flex">
      <div className="flex flex-col overflow-auto max-h-screen w-[65%]">
        <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
        {course.chapters.map((chapter, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() =>
                setActiveChapter(activeChapter === index ? null : index)
              }
              className="text-xl font-semibold w-full text-left bg-gray-200 p-3 rounded-lg"
            >
              {chapter.title}
            </button>
            {activeChapter === index && (
              <div className="pl-5 mt-2">
                {chapter.lectures.map((lecture, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedVideo(lecture.url)}
                    className="block text-lg mb-2 text-blue-600 underline"
                  >
                    {lecture.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col max-h-fit w-[35%] gap-3 border-2 border-black p-4">
        <img src={course.img} alt="" className="w-full" />
        <h1>${course.new_price}</h1>
        <button className="px-5 w-fit py-2 bg-[#dc143c] text-sm font-semibold text-white rounded-full">
          Buy Now ${course.new_price}
        </button>
        <ul className="px-4  list-disc text-sm">
          <li>30 days monybag gurentee</li>
          <li>Source code included</li>
          <li>Lifetime Access</li>
          <li>Premium Access</li>
        </ul>
      </div>

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
