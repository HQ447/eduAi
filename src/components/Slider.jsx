import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Slider = () => {
  const darkMode = useSelector((state) => state.store.darkMode);
  const logos = [
    "https://www.becodemy.com/_next/static/media/one-entry.9b9bd8f2.svg",
    "https://www.becodemy.com/_next/static/media/clerk-dark-logo.891b17ea.svg",
    "https://www.becodemy.com/_next/static/media/eraser-dark-logo.0ccbd449.svg",
    "https://www.becodemy.com/_next/static/media/datastax.light.6bdfb9d2.svg",
    // Add more paths as needed
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-[#101215] text-white" : ""
      } flex flex-col justify-center items-center   h-[50vh]`}
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] -xsm:mb-1 ">
          <span
            style={{
              background:
                "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            EduAI{" "}
          </span>
          Trusted By
        </h1>
      </div>

      <div className="  overflow-hidden -lg:max-w-[43rem] -md:max-w-[37rem] -sm:max-w-[32rem]  -xsm:max-w-[14rem]  xl:max-w-4xl relative">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 8, // Reduced to 10 seconds for faster speed
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="w-44 -xsm:w-32 h-auto opacity-80"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
