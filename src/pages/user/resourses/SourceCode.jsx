import { useSelector } from "react-redux";
import { sourceCode } from "../../../Data/data";

function SourceCode() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#0f1113] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex flex-col px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      <h1 className="w-full text-center text-xl font-[600]  ">
        Source{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Code
        </span>
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {sourceCode.map((obj) => (
          <div
            key={obj.id}
            className={`${
              darkMode
                ? "bg-[#0f1113] text-white border"
                : "bg-white text-[#000000b5] border-2 "
            } flex w-72 mt-4 h-fit -xsm:w-full flex-col p-4  gap-3 -xsm:text-sm rounded-md shadow-xl`}
          >
            <img
              src={obj.img}
              className="w-full "
              alt="cource img loading error"
            />
            <h1 className=" text-sm">{obj.title}</h1>
            <div className="flex justify-end">
              <p>{obj.views}k</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCode;
