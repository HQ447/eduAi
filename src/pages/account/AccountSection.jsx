import { useState } from "react";

const AccountSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(""); // Stores current video URL
  const [sections, setSections] = useState([
    {
      title: "Section 28: Application Programming Interfaces (APIs)",
      isOpen: false,
      lectures: [
        {
          title: "Introduction to APIs",
          url: "https://sample-videos.com/video123.mp4",
        },
        {
          title: "Building a REST AP",
          url: "https://sample-videos.com/video456.mp4",
        },
      ],
    },
    {
      title: "Section 29: Capstone Project - Use a Public API",
      isOpen: false,
      lectures: [
        {
          title: "API Integration Basics",
          url: "https://sample-videos.com/video789.mp4",
        },
      ],
    },
  ]);

  const toggleSection = (index) => {
    setSections((prev) =>
      prev.map((section, i) =>
        i === index ? { ...section, isOpen: !section.isOpen } : section
      )
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left: Video Player */}
      <div className="w-3/5 bg-black">
        {selectedVideo ? (
          <video
            src={selectedVideo}
            controls
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-center pt-20">
            Select a lecture to play
          </div>
        )}
      </div>

      {/* Right: Course Content */}
      <div className="w-2/5 bg-white p-5 overflow-y-scroll">
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <div
              className="p-3 bg-gray-200 cursor-pointer rounded-lg font-bold"
              onClick={() => toggleSection(index)}
            >
              {section.title}
            </div>

            {section.isOpen && (
              <ul className="pl-5 mt-2">
                {section.lectures.map((lecture, idx) => (
                  <li
                    key={idx}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                    onClick={() => setSelectedVideo(lecture.url)}
                  >
                    {lecture.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSection;
