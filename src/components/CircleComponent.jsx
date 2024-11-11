import { motion } from "framer-motion";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { useSelector } from "react-redux";

const CircleComponent = () => {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#101215] text-white " : ""
      }   justify-center  flex flex-col items-center relative min-h-screen`}
    >
      <h1 className=" -xsm:text-xl mb-4 -xsm:static w-[70%] text-3xl text-center absolute top-10">
        We support your programming journey in our community. Lets have a look
        at how to navigate the Becodemy website effectively.
      </h1>
      <motion.div
        className="w-[90vh] -xsm:w-[35vh] -xsm:h-[35vh] h-[90vh] border border-gray-700 rounded-full relative flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {/* Blue Dot */}
        <motion.div
          className="w-3 h-3 bg-blue-700 rounded-full absolute"
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
          className="w-4 h-4 bg-green-600 rounded-full absolute"
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
      <p
        className={`absolute -xsm:top-[62%] flex items-center -xsm:flex-col -xsm:justify-center ${
          darkMode ? "text-white" : "text-gray-700"
        } text-center -xsm:text-xs `}
      >
        <AiOutlinePlayCircle className=" text-5xl -xsm:text-4xl" />
        Click here to preview the video
      </p>
      <div className="-xsm:hidden flex justify-center gap-6 absolute bottom-14">
        <div className="flex items-center p-9 gap-4 rounded-md bg-[#3d3de4] text-white">
          <FaUsers className="text-6xl" />
          <div className="flex flex-col ">
            <h1>10.2k</h1>
            <h1>User Rating</h1>
          </div>
        </div>
        <div className="flex items-center p-9 gap-4 rounded-md bg-[#8c3ed9] text-white">
          <FaGlobe className="text-6xl" />
          <div className="flex flex-col ">
            <h1>5K+</h1>
            <h1>Daily Visitors</h1>
          </div>
        </div>
        <div className="flex items-center p-9 gap-4 rounded-md bg-[#33b178] text-white">
          <FaStar className="text-6xl" />
          <div className="flex flex-col ">
            <h1>4.9/5</h1>
            <h1>Students Rating</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleComponent;