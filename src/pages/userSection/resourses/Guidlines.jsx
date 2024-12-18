import { useSelector } from "react-redux";
function Guidlines() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#0f1113] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex flex-col px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      <h1 className="w-full text-center text-xl font-[600]  ">
        Guid
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          lines
        </span>
      </h1>
      No Guidlines
    </div>
  );
}

export default Guidlines;
