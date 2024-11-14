import { useParams } from "react-router-dom";
import { useState } from "react";
import ReactPlayer from "react-player";
import { courseCollection } from "../../Data/data";

function CourseDetail() {
  const { id } = useParams();
  const course = courseCollection.find((course) => course.id === parseInt(id));
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="px-10 py-5">
      <h1 className="text-4xl font-bold mb-5">{course.title}</h1>
      {course.chapters.map((chapter, index) => (
        <div key={index} className="mb-4">
          <button className="text-xl font-semibold">{chapter.title}</button>
          <div className="pl-5">
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
        </div>
      ))}
      {selectedVideo && (
        <div className="mt-5">
          <ReactPlayer url={selectedVideo} controls width="100%" />
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
