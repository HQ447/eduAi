import { useSelector } from "react-redux";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { LuArrowBigDownDash } from "react-icons/lu";
import StarRating from "../../components/StarRating";
import { PieChart } from "react-minimal-pie-chart";

//replace this with the purchased courses data of the user
import { courseCollection } from "../../Data/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const completed = 30;
  const pieChartData = [
    { title: "Remaining", value: 100 - completed, color: "#E38627" },
    { title: "Completed", value: completed, color: "#C13C37" },
  ];

  // Animation Variants
  const textVariants = {
    animate: {
      y: [0, -10, 0],
      color: ["#000000", "#784aeb", "#000000"],
      transition: {
        y: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // Loop for the vertical animation
        color: { duration: 2, repeat: Infinity, ease: "linear" }, // Loop for the color animation
      },
    },
  };

  return (
    <div className="bg-[#dcdcdc] w-full min-h-screen">
      <div className="bg-[#784aeb] pb-20 -xsm:pb-10 flex flex-col rounded-b-[5rem] -xsm:rounded-t-[4rem]">
        <div className="Nav flex justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4 -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>

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
      <div className="rounded-t-[5rem] -xsm:rounded-t-[4rem] bg-white -xsm:mt-4 mt-6 relative -xsm:py-2 py-20  px-10 -sm:px-16 -xsm:px-7 ">
        <div className="absolute -xsm:rounded-t-[4rem] -md:w-[80%] -sm:w-[86%] -xsm:relative -xsm:justify-center -xsm:py-4 -xsm:mb-6 -xsm:top-0 -xsm:w-[95%] flex justify-between rounded-md -top-12 left-0 right-0 shadow-lg shadow-[#c2c2c2] mx-auto py-5 px-7 w-[60%] bg-white">
          <div className="flex -xsm:hidden flex-col items-center justify-center">
            <FaLaptopCode />
            <p>All Courses</p>
          </div>
          <motion.p
            className="text-2xl -sm:text-lg font-semibold flex items-center"
            variants={textVariants}
            animate="animate"
          >
            My Learning <LuArrowBigDownDash />
          </motion.p>
          <div className="flex -xsm:hidden flex-col items-center justify-center">
            <FaLaptopCode />
            <p>All Courses</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 ">
          {/* get the purchased courses data of that user */}
          {courseCollection.map((course) => (
            <div
              key={course.id}
              className="flex -sm:flex-col cursor-pointer -sm:w-full w-fit gap-6 border-[1px] border-solid border-gray-500 p-4"
              onClick={() => navigate(`/LMS/${course.id}`)}
            >
              <img
                src={course.img}
                alt="img loading error"
                className="w-[25rem] my-auto -n:w-[18rem] -n:h-[13rem] -md:w-[15rem] -sm:w-full -sm:h-full"
              />
              <div className="w-[30rem] -md:w-[25rem] -sm:w-full flex flex-col gap-2">
                <h1 className="text-xl -sm:text-lg font-semibold">
                  {course.title}
                </h1>
                <p className="-md:hidden -sm:flex text-xs">
                  {course.decription}
                </p>
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
                <p className="px-2 py-1 text-[#0c4b0c] font-semibold text-xs w-fit rounded-sm bg-[#eceb98]">
                  Purchased
                </p>
              </div>
              <div className="flex flex-col items-center">
                <PieChart
                  className="w-32 -sm:w-40"
                  data={pieChartData}
                  radius={42}
                  segmentsShift={(index) => (index === hovered ? 4 : 0)} // Slightly pull out the hovered section
                  animate
                  onMouseOver={(_, index) => setHovered(index)}
                  onMouseOut={() => setHovered(null)}
                  label={({ dataEntry }) => ` ${dataEntry.value}%`} // Display percentage inside the pie chart
                  labelPosition={50}
                  labelStyle={{
                    fontSize: "10px",
                    fontFamily: "sans-serif",
                    fill: "#fff",
                  }}
                />
                <div className="flex flex-col gap-2 ">
                  <p className="flex items-center justify-center gap-1">
                    <div className="w-3 h-3 bg-[#C13C37]"></div>
                    <p className="text-xs">Completed</p>
                  </p>
                  <p className="flex justify-center items-center gap-1">
                    <div className="w-3 h-3 bg-[#E38627]"></div>
                    <p className="text-xs">Remaining</p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
