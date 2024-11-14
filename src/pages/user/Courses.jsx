import { GoDotFill } from "react-icons/go";
import { courseCollection } from "../../Data/data";

import { useSelector } from "react-redux";
import StarRating from "../../components/StarRating";
import { useNavigate } from "react-router-dom";

function Courses() {
  const darkMode = useSelector((state) => state.store.darkMode);
  const navigate = useNavigate();
  return (
    <div
      className={` ${
        darkMode
          ? "bg-[#101215] text-white "
          : "bg-gradient-to-b from-[#f5faff] to-[#cce7f5]"
      }  px-20 -md:px-10 -sm:px-6 pb-5 -xsm:px-3 pt-10 `}
    >
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] mb-5 -xsm:mb-1 ">
          Popular{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Cources
          </span>
        </h1>
        <p className=" -xsm:text-sm text-xl flex items-center -xsm:text-center">
          <GoDotFill
            className="text-3xl text-green-500 animate-pulse-scale"
            aria-hidden="true"
          />{" "}
          Our comprehensive project based courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {courseCollection.map((obj) => (
          <div
            key={obj.id}
            className={`${
              darkMode
                ? "bg-[#242424] text-white "
                : "bg-white text-[#000000b5] "
            } flex w-80 flex-col p-5 gap-3 -xsm:text-sm rounded-md shadow-xl cursor-pointer`}
            onClick={() => navigate(`/coursedetails/${obj.id}`)}
          >
            <img
              src={obj.img}
              className="w-full rounded-lg"
              alt="cource img loading error"
            />
            <h1 className="">{obj.title}</h1>
            <div className="flex justify-between">
              <StarRating rating={obj.rating} />
              <p>{obj.students} Students</p>
            </div>
            <div className="flex justify-between">
              <p>
                ${obj.new_price}{" "}
                <del className="text-red-600">${obj.old_price}</del>
              </p>
              <p>{obj.lectures} Lectures</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
