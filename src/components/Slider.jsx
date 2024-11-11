import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Slider = () => {
  const darkMode = useSelector((state) => state.store.darkMode);
  const logos = [
    "/path/to/logo1.png",
    "/path/to/logo2.png",
    "/path/to/logo3.png",
    "/path/to/logo4.png",
    // Add more paths as needed
  ];

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="border-2 border-black overflow-hidden min-w-[20%] w-full max-w-4xl relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30, // Adjust this for speed
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand ${index + 1}`}
              className="w-24 h-auto opacity-80"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Slider;
