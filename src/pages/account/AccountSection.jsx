import { useSelector } from "react-redux";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuArrowBigDownDash } from "react-icons/lu";
import { courseCollection } from "../../Data/data";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);

  // Animation Variants
  const textVariants = {
    animate: {
      y: [0, -10, 0], // Moves up and then back down
      color: ["#000000", "#784aeb", "#000000"], // Color changes during the animation
      transition: {
        y: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // Loop for the vertical animation
        color: { duration: 2, repeat: Infinity, ease: "linear" }, // Loop for the color animation
      },
    },
  };

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-[#784aeb] pb-20 flex flex-col">
        <div className="Nav flex justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4 -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>
        <hr />
        <div className="flex flex-col font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3"
          />
          <h1 className="uppercase">{activeUser.username}</h1>
          <p className="text-xl">{activeUser.email}</p>
        </div>
      </div>
      <div className="px-20 relative py-20 -xsm:py-4 -md:px-10 -sm:px-6 -xsm:px-3">
        <div className="absolute flex justify-between rounded-md -top-12 left-0 right-0 shadow-lg shadow-[#c2c2c2] mx-auto py-8 px-7 w-[60%] bg-white">
          <div className="flex flex-col items-center justify-center">
            <FaLaptopCode />
            <p>All Courses</p>
          </div>
          <motion.p
            className="text-2xl font-semibold flex items-center"
            variants={textVariants}
            animate="animate" // Triggers the continuous animation
          >
            My Learning <LuArrowBigDownDash />
          </motion.p>
          <div className="flex flex-col items-center justify-center">
            <FaLaptopCode />
            <p>All Courses</p>
          </div>
        </div>
        List of Purchased Courses
      </div>
    </div>
  );
}

export default AccountSection;
