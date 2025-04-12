import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  SkipForward,
  SkipBack,
  Menu,
  X,
  BookOpen,
} from "lucide-react";

// Sample course data
const defaultCourse = {
  id: 1,
  img: "https://i.pcmag.com/imagery/articles/03dI0LmA2GJzfLIGI2xUir4-2..v1708701892.jpg",
  title: "Introduction to Microsoft Excel",
  decription:
    "We offers Excel preparation courses which will help the students for excel, NUMS, Aga Khan, and other medical college entrance exams.",
  rating: "3",
  students: "143",
  old_price: "50",
  new_price: "0",
  instructor: "Mr Israr Muzamil , Database Expert",
  lectures: "33",
  popular: false,
  category: "IT",
  chapters: [
    {
      title: "Biology Basics",
      lectures: [
        {
          title: "What is E-commerce?",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
        {
          title: "Project Structure",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
      ],
    },
    {
      title: "Chemistry Basics",
      lectures: [
        {
          title: "What is E-commerce?",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
        {
          title: "Project Structure",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
      ],
    },
    {
      title: "Chemistry Intermediate",
      lectures: [
        {
          title: "What is E-commerce?",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
        {
          title: "Project Structure",
          url: "https://cdn.pixabay.com/video/2024/06/02/214940_large.mp4",
        },
      ],
    },
  ],
  learnings: [
    "You will learn how to scale one big web application",
    "You will be able to build a full stack LMS Platform",
    "You will learn how to maintenance cache on a large scale application",
    "You will learn how to send dynamic mail templates with Node.js and EJS",
    "You will learn how to make an instant notification system with Socket.io/WebSocket",
  ],
  prerequisites: [
    "You need basic knowledge of Biology and Chemistry",
    "You will understand English Language",
  ],
};

export default function LMS({ course = defaultCourse }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeLecture, setActiveLecture] = useState(0);
  const [isChapterOpen, setIsChapterOpen] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [activeTab, setActiveTab] = useState("content"); // 'content' or 'info'
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);

  // Use the passed course or default to the sample data
  const currentCourse = course || defaultCourse;

  // Initialize first chapter as open
  useEffect(() => {
    if (currentCourse && currentCourse.chapters) {
      const initialChapterState = {};
      currentCourse.chapters.forEach((_, index) => {
        initialChapterState[index] = index === 0;
      });
      setIsChapterOpen(initialChapterState);
    }
  }, [currentCourse]);

  // Ensure active chapter and lecture are within bounds
  useEffect(() => {
    if (currentCourse && currentCourse.chapters) {
      if (activeChapter >= currentCourse.chapters.length) {
        setActiveChapter(0);
      }

      const currentChaptersLectures =
        currentCourse.chapters[activeChapter]?.lectures || [];
      if (activeLecture >= currentChaptersLectures.length) {
        setActiveLecture(0);
      }
    }
  }, [currentCourse, activeChapter, activeLecture]);

  // Video control functions
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    if (videoRef.current && progressBarRef.current) {
      const newTime =
        (e.nativeEvent.offsetX / progressBarRef.current.offsetWidth) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
      videoRef.current.muted = !isMuted;
    }
  };

  const handleVolumeChange = (e) => {
    if (videoRef.current) {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const goToNextLecture = () => {
    if (!currentCourse || !currentCourse.chapters) return;

    const currentChapter = currentCourse.chapters[activeChapter];
    if (!currentChapter) return;

    if (activeLecture < currentChapter.lectures.length - 1) {
      setActiveLecture(activeLecture + 1);
    } else if (activeChapter < currentCourse.chapters.length - 1) {
      setActiveChapter(activeChapter + 1);
      setActiveLecture(0);
    }
  };

  const goToPreviousLecture = () => {
    if (!currentCourse || !currentCourse.chapters) return;

    if (activeLecture > 0) {
      setActiveLecture(activeLecture - 1);
    } else if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
      const prevChapterLectures =
        currentCourse.chapters[activeChapter - 1]?.lectures || [];
      setActiveLecture(prevChapterLectures.length - 1);
    }
  };

  // Switch lecture video when active lecture changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setCurrentTime(0);
      if (isPlaying) {
        videoRef.current.play();
      }
    }
    // Close mobile sidebar when selecting a lecture
    setShowMobileSidebar(false);
  }, [activeChapter, activeLecture]);

  const toggleChapter = (index) => {
    setIsChapterOpen({
      ...isChapterOpen,
      [index]: !isChapterOpen[index],
    });
  };

  const selectLecture = (chapterIndex, lectureIndex) => {
    setActiveChapter(chapterIndex);
    setActiveLecture(lectureIndex);
  };

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  // If there's no course data, show a loading state
  if (
    !currentCourse ||
    !currentCourse.chapters ||
    currentCourse.chapters.length === 0
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Loading course content...
          </h2>
          <p className="text-gray-600 text-sm">
            Please wait while we prepare your learning materials.
          </p>
        </div>
      </div>
    );
  }

  const currentLectureUrl =
    currentCourse.chapters[activeChapter]?.lectures[activeLecture]?.url || "";
  const currentLectureTitle =
    currentCourse.chapters[activeChapter]?.lectures[activeLecture]?.title ||
    "Lecture";
  const currentChapterTitle =
    currentCourse.chapters[activeChapter]?.title || "Chapter";

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-screen max-h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block md:w-1/3 lg:w-1/3 bg-white border-r border-gray-200 overflow-y-auto max-h-screen">
        <div className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-800">
            {currentCourse.title}
          </h1>
          <p className="text-xs text-gray-600 mt-1">
            Instructor: {currentCourse.instructor}
          </p>
        </div>

        <div className="p-3 space-y-2">
          {currentCourse.chapters.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div
                className={`flex justify-between items-center p-3 cursor-pointer ${
                  activeChapter === chapterIndex
                    ? "bg-blue-50 text-blue-700"
                    : "bg-gray-50"
                }`}
                onClick={() => toggleChapter(chapterIndex)}
              >
                <h3 className="font-medium text-sm">{chapter.title}</h3>
                <button className="text-gray-500">
                  {isChapterOpen[chapterIndex] ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>
              </div>

              {isChapterOpen[chapterIndex] && (
                <div className="bg-white">
                  {chapter.lectures.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className={`p-2 pl-6 border-t border-gray-100 cursor-pointer hover:bg-gray-50 flex items-center ${
                        activeChapter === chapterIndex &&
                        activeLecture === lectureIndex
                          ? "bg-blue-50 text-blue-700"
                          : ""
                      }`}
                      onClick={() => selectLecture(chapterIndex, lectureIndex)}
                    >
                      <div className="mr-2 text-blue-500">
                        <Play size={14} />
                      </div>
                      <p className="text-xs font-medium">{lecture.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar (Overlay) */}
      {showMobileSidebar && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-3/4 bg-white h-full overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 p-3 border-b border-gray-200 flex justify-between items-center">
              <h1 className="text-lg font-bold text-gray-800 truncate">
                {currentCourse.title}
              </h1>
              <button
                onClick={toggleMobileSidebar}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={20} className="text-gray-700" />
              </button>
            </div>

            <div className="p-3 space-y-2">
              {currentCourse.chapters.map((chapter, chapterIndex) => (
                <div
                  key={chapterIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className={`flex justify-between items-center p-3 cursor-pointer ${
                      activeChapter === chapterIndex
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-50"
                    }`}
                    onClick={() => toggleChapter(chapterIndex)}
                  >
                    <h3 className="font-medium text-sm">{chapter.title}</h3>
                    <button className="text-gray-500">
                      {isChapterOpen[chapterIndex] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>

                  {isChapterOpen[chapterIndex] && (
                    <div className="bg-white">
                      {chapter.lectures.map((lecture, lectureIndex) => (
                        <div
                          key={lectureIndex}
                          className={`p-2 pl-6 border-t border-gray-100 cursor-pointer hover:bg-gray-50 flex items-center ${
                            activeChapter === chapterIndex &&
                            activeLecture === lectureIndex
                              ? "bg-blue-50 text-blue-700"
                              : ""
                          }`}
                          onClick={() =>
                            selectLecture(chapterIndex, lectureIndex)
                          }
                        >
                          <div className="mr-2 text-blue-500">
                            <Play size={14} />
                          </div>
                          <p className="text-xs font-medium">{lecture.title}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4" onClick={toggleMobileSidebar}></div>
        </div>
      )}

      {/* Main Content - Video Player */}
      <div className="md:w-2/3 lg:w-2/3 w-full md:overflow-y-auto flex flex-col h-screen">
        {/* Video Player */}
        <div className="bg-black w-full">
          <div className="relative aspect-video bg-black max-w-full mx-auto">
            <video
              ref={videoRef}
              className="w-full h-full"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={goToNextLecture}
            >
              <source src={currentLectureUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3">
              {/* Progress Bar */}
              <div
                ref={progressBarRef}
                className="w-full h-1 bg-gray-600 cursor-pointer mb-3 rounded-full overflow-hidden"
                onClick={handleProgressChange}
              >
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Play/Pause Button */}
                  <button onClick={togglePlay} className="hover:text-blue-400">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                  </button>

                  {/* Previous/Next Lecture */}
                  <button
                    onClick={goToPreviousLecture}
                    className="hover:text-blue-400"
                  >
                    <SkipBack size={18} />
                  </button>

                  <button
                    onClick={goToNextLecture}
                    className="hover:text-blue-400"
                  >
                    <SkipForward size={18} />
                  </button>

                  {/* Volume Controls - Hide on small screens */}
                  <div className="hidden sm:flex items-center">
                    <button
                      onClick={toggleMute}
                      className="hover:text-blue-400 mr-1"
                    >
                      {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-16 md:w-20"
                    />
                  </div>

                  {/* Time Display - Hide on very small screens */}
                  <div className="text-xs hidden sm:block">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={handleFullScreen}
                  className="hover:text-blue-400"
                >
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Controls and Info Bar */}
        <div className="md:hidden bg-white border-b border-gray-200 flex items-center justify-between p-2">
          <div className="flex-1 truncate">
            <h2 className="font-medium text-sm truncate">
              {currentLectureTitle}
            </h2>
            <p className="text-gray-500 text-xs truncate">
              {currentChapterTitle}
            </p>
          </div>
          <button
            onClick={toggleMobileSidebar}
            className="ml-2 p-2 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="flex">
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "content"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("content")}
            >
              Content
            </button>
            <button
              className={`flex-1 py-2 text-center text-sm font-medium ${
                activeTab === "info"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("info")}
            >
              Overview
            </button>
          </div>
        </div>

        {/* Mobile Content Tab */}
        <div
          className={`md:hidden flex-1 overflow-y-auto ${
            activeTab === "content" ? "block" : "hidden"
          }`}
        >
          <div className="p-3 space-y-2">
            {currentCourse.chapters.map((chapter, chapterIndex) => (
              <div
                key={chapterIndex}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div
                  className={`flex justify-between items-center p-3 cursor-pointer ${
                    activeChapter === chapterIndex
                      ? "bg-blue-50 text-blue-700"
                      : "bg-gray-50"
                  }`}
                  onClick={() => toggleChapter(chapterIndex)}
                >
                  <h3 className="font-medium text-sm">{chapter.title}</h3>
                  <button className="text-gray-500">
                    {isChapterOpen[chapterIndex] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                </div>

                {isChapterOpen[chapterIndex] && (
                  <div className="bg-white">
                    {chapter.lectures.map((lecture, lectureIndex) => (
                      <div
                        key={lectureIndex}
                        className={`p-2 pl-6 border-t border-gray-100 cursor-pointer hover:bg-gray-50 flex items-center ${
                          activeChapter === chapterIndex &&
                          activeLecture === lectureIndex
                            ? "bg-blue-50 text-blue-700"
                            : ""
                        }`}
                        onClick={() =>
                          selectLecture(chapterIndex, lectureIndex)
                        }
                      >
                        <div className="mr-2 text-blue-500">
                          <Play size={14} />
                        </div>
                        <p className="text-xs font-medium">{lecture.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Info Tab */}
        <div
          className={`md:hidden flex-1 overflow-y-auto ${
            activeTab === "info" ? "block" : "hidden"
          }`}
        >
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2">
                What Youll Learn
              </h3>
              <ul className="list-disc pl-4 space-y-1">
                {currentCourse.learnings.map((item, index) => (
                  <li key={index} className="text-gray-600 text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2">
                Prerequisites
              </h3>
              <ul className="list-disc pl-4 space-y-1">
                {currentCourse.prerequisites.map((item, index) => (
                  <li key={index} className="text-gray-600 text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 bg-blue-50 rounded-lg p-3">
              <div className="flex items-start">
                <div className="mr-3 text-blue-500">
                  <BookOpen size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-blue-800 mb-1">
                    Course Progress
                  </h4>
                  <p className="text-xs text-blue-700">
                    Lecture {activeLecture + 1} of{" "}
                    {currentCourse.chapters[activeChapter]?.lectures?.length ||
                      0}
                  </p>
                  <div className="w-full h-1 bg-blue-200 rounded-full mt-2">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: "25%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Course Information (hidden on mobile) */}
        <div className="hidden md:block p-4 bg-white flex-1 overflow-y-auto">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            {currentLectureTitle}
          </h2>
          <p className="text-gray-600 mb-4 text-sm">
            Chapter {activeChapter + 1}: {currentChapterTitle}
          </p>

          {/* Course Information Tabs */}
          <div className="mt-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-base font-medium text-gray-800 mb-2">
                What You will Learn
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {currentCourse.learnings.map((item, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-medium text-gray-800 mb-2">
                Prerequisites
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                {currentCourse.prerequisites.map((item, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
