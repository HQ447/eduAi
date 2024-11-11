import { useSelector } from "react-redux";
function Guidlines() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#000000d6] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      No Guidelines
    </div>
  );
}

export default Guidlines;
