import { useSelector } from "react-redux";
import { feedbacks } from "../../../Data/data";
import { GoDotFill } from "react-icons/go";
import StarRating from "../../../components/StarRating";

function Feedback() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode
          ? "bg-[#101215] text-white "
          : "bg-gradient-to-b from-[#cce7f5] to-[#f5faff]"
      }  px-20 -md:px-10 -sm:px-6 pb-5 -xsm:px-3 pt-10 `}
    >
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] mb-5 -xsm:mb-1 ">
          Students{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Feedback
          </span>
        </h1>
        <p className=" -xsm:text-sm text-xl flex items-center -xsm:text-center">
          <GoDotFill
            className="text-3xl text-green-500 animate-pulse-scale"
            aria-hidden="true"
          />{" "}
          Lets have a look at our students reaction!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4  ">
        {feedbacks.map((obj) => (
          <div
            key={obj}
            className={` ${
              darkMode ? "!bg-[#242424]" : "bg-white"
            } w-[20rem] flex flex-col bg-white p-3 text-sm gap-3 rounded-lg shadow-lg`}
          >
            <div className="flex items-center gap-3">
              <img src={obj.pic} alt="" className=" w-10 h-10 rounded-full" />
              <div className="flex flex-col ">
                <h1 className="text-lg">{obj.name}</h1>
                <h1>{obj.status}</h1>
                <h1>{obj.country}</h1>
              </div>
            </div>
            <StarRating rating={obj.rating} />
            <p>{obj.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
