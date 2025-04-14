import { motion } from "framer-motion";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const CircleComponent = () => {
  const darkMode = useSelector((state) => state.store.darkMode);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  // Function to handle play button click
  const handlePlayClick = () => {
    setShowVideoPlayer(true);
  };

  // Function to close video player
  const handleCloseVideo = () => {
    setShowVideoPlayer(false);
  };

  // bg-gradient-to-b from-[#cce7f5] to-[#f5faff]
  return (
    <div
      className={` ${
        darkMode ? "bg-[#0f1113] text-white " : "bg-white"
      }  max-w-full py-14  overflow-hidden  justify-center  flex flex-col items-center relative `}
    >
      <h1 className=" -xsm:text-xl -xsm:mb-5 -xsm:static w-[70%] text-3xl text-center absolute top-10">
        We support your programming journey in our community.
      </h1>
      <motion.div
        className="w-[90vh] -xsm:w-[32vh] -lg:w-[70vh] -lg:h-[70vh] -md:w-[50vh] -md:h-[50vh] -sm:w-[40vh] -sm:h-[40vh] -xsm:h-[32vh] h-[90vh] border border-gray-700 rounded-full relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Blue Dot */}
        <motion.div
          className="absolute w-3 h-3 bg-blue-700 rounded-full"
          style={{ top: 0, left: "60%", transform: "translateX(-50%)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />
        {/* Green Dot */}
        <motion.div
          className="absolute w-4 h-4 bg-green-600 rounded-full"
          style={{ bottom: 0, left: "60%", transform: "translateX(-50%)" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Paragraph Inside the Circle, Outside Rotation */}
      <div
        className={`absolute  -md:top-[30%] -sm:top-[26%] -xsm:top-[32%] flex items-center -xsm:flex-col -xsm:justify-center ${
          darkMode ? "text-white" : "text-gray-700"
        } text-center -xsm:text-xs animate-pulse-scale cursor-pointer`}
        aria-hidden="true"
        onClick={handlePlayClick}
      >
        <AiOutlinePlayCircle className="text-5xl  -xsm:text-4xl" />
        Click here to preview the video
      </div>
      <div className="absolute flex flex-wrap justify-center gap-6  -md:static -xsm:mt-5 bottom-14">
        <div className="flex items-center p-9 -xsm:p-4 gap-4 rounded-md bg-[#3d3de4] text-white">
          <FaUsers className="text-6xl" />
          <div className="flex flex-col ">
            <h1>10.2k</h1>
            <h1>User Rating</h1>
          </div>
        </div>
        <div className="flex items-center p-9 -xsm:p-4 gap-4 rounded-md bg-[#8c3ed9] text-white">
          <FaGlobe className="text-6xl" />
          <div className="flex flex-col ">
            <h1>5K+</h1>
            <h1>Daily Visitors</h1>
          </div>
        </div>
        <div className="flex items-center p-9 -xsm:p-4 gap-4 rounded-md bg-[#33b178] text-white">
          <FaStar className="text-6xl" />
          <div className="flex flex-col ">
            <h1>4.9/5</h1>
            <h1>Students Rating</h1>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative w-full max-w-md overflow-hidden bg-black rounded-lg md:max-w-lg lg:max-w-xl">
            {/* Close button */}
            <button
              className="absolute z-10 p-1 text-white bg-black bg-opacity-50 rounded-full top-2 right-2"
              onClick={handleCloseVideo}
            >
              <IoMdClose className="text-2xl" />
            </button>

            {/* Video Player */}
            <div className="relative pb-[56.25%] h-0">
              <video
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                controls
                autoPlay
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleComponent;
