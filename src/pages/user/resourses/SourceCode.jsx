import { useSelector } from "react-redux";
import { sourceCode } from "../../../Data/data";

function SourceCode() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#000000d6] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      <div className="flex flex-wrap justify-center gap-5">
        {sourceCode.map((obj) => (
          <div
            key={obj.id}
            className={`${
              darkMode
                ? "bg-[#242424] text-white "
                : "bg-white text-[#000000b5] "
            } flex w-72 h-fit -xsm:w-full flex-col p-5 gap-3 -xsm:text-sm rounded-md shadow-xl`}
          >
            <img
              src={obj.img}
              className="w-full rounded-lg"
              alt="cource img loading error"
            />
            <h1 className="">{obj.title}</h1>
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
