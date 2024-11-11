import { useSelector } from "react-redux";
import "../style sheets/Home.css";

function Mainpage() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={`${
        darkMode
          ? "bg-[#101215] text-white "
          : "bg-gradient-to-b from-[#f5faff] to-[#cce7f5]"
      }    flex flex-col  px-20 -md:px-10 -sm:px-6 -xsm:px-3   w-full transition-all`}
    >
      <div className="flex w-full pt-14 py-8 md:items-center -md:justify-center flex-wrap-reverse">
        <div className="flex flex-col gap-5  basis-3/6 -md:basis-full  ">
          <h1 className=" -xsm:text-[1.3rem] text-5xl -md:text-center w-full -sm:text-4xl font-[600] lineHeight">
            Start your{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              programming Journey
            </span>{" "}
            with our Dedicated community!
          </h1>
          <p
            className={` ${
              darkMode ? "text-white" : "text-[#000000b5] "
            } -xsm:text-sm text-xl -md:text-center`}
          >
            Begin your coding adventure in our community, where learning is
            always appreciated and valued.
          </p>
          <button className="rounded-full -xsm:text-sm -md:mx-auto max-w-fit py-3 -xsm:py-2 px-5 bg-[#653bce] text-white font-semibold">
            Explore Resources
          </button>
        </div>
        <div className="flex basis-3/6  -md:basis-full -md:w-full ">
          <img
            src="https://www.becodemy.com/_next/static/media/banner.8a9f498b.svg"
            alt="img loading error"
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
