import { useSelector } from "react-redux";
function Blogs() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={` ${
        darkMode ? "bg-[#000000d6] text-white" : " bg-[#ffff] text-[#000000b5] "
      } flex flex-col px-20 py-6 min-h-[50vh] -xsm:py-4 -md:px-10 -sm:px-6 `}
    >
      <h1 className="w-full text-center text-xl font-[600]  ">
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          B
        </span>
        logs
      </h1>
      No Blogs
    </div>
  );
}

export default Blogs;
