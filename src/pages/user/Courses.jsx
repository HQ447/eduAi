import { GoDotFill } from "react-icons/go";
import { courseCollection } from "../../Data/data";
import { useSelector } from "react-redux";

function Courses() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#01090a] text-white " : "bg-[#f7f7f7]"
      } pt-28 px-20 -md:px-10 -sm:px-6 pb-5  `}
    >
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="w-full text-center text-4xl font-[600] mb-5 ">
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
        <p className="text-xl flex items-center -xsm:text-center">
          <GoDotFill className="text-3xl text-green-500" /> Our comprehensive
          project based courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {courseCollection.map((obj) => (
          <div
            key={obj.id}
            className={`${
              darkMode ? "bg-[#242424] text-white " : "bg-white "
            } flex w-80 flex-col p-5 gap-3 rounded-md shadow-lg`}
          >
            <img
              src={obj.img}
              className="w-full rounded-lg"
              alt="cource img loading error"
            />
            <h1>{obj.title}</h1>
            <div className="flex justify-between">
              <p>{obj.rating}Rating</p>
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
