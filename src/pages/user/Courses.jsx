import { GoDotFill } from "react-icons/go";

//replace this with the all courses data taken from db
//Retrive all courses from DB in useEffect , and then dispatch it into redux store to prevent api calls
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
        darkMode ? "bg-[#101215] text-white " : "bg-white"
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
            Courses
          </span>
        </h1>
        <p className=" -xsm:text-sm text-xl flex gap-3 items-center -xsm:text-center">
          <GoDotFill
            className="text-3xl text-green-500 rounded-full animate-pulse-scale border-2 "
            aria-hidden="true"
          />{" "}
          Our comprehensive project based courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 -xsm:px-2">
        {courseCollection.map((obj) => (
          <div
            key={obj.id}
            className={`${
              darkMode ? "bg-[#242424] text-white " : " text-[#000000b5] "
            } flex p-[14px] border-2 w-72 -xsm:w-full rounded-lg flex-col -xsm:text-sm  cursor-pointer hover:scale-105 hover:shadow-xl transition-all
            `}
            onClick={() => navigate(`/coursedetails/${obj.id}`)}
          >
            <img
              src={obj.img}
              className="w-full rounded-md"
              alt="cource img loading error "
            />
            <div className="py-3 flex flex-col gap-2">
              <h1 className=" text-md font-semibold">{obj.title}</h1>
              <p className="text-xs text-green-800">{obj.instructor}</p>
              <p className="text-xs">{obj.decription}</p>
              <div className="flex items-center text-sm">
                <h1>{obj.rating}.0</h1>
                &nbsp;
                <StarRating rating={obj.rating} />
                &nbsp;
                <p>({obj.students})</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-semibold">
                  {obj.new_price == 0 ? "Free" : `$${obj.new_price}`}
                  &nbsp;{" "}
                  <del className="text-red-500 text-sm font-semibold">
                    ${obj.old_price}
                  </del>
                </p>
                <p className="text-sm">{obj.lectures} Lectures</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
