import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";
import { faqs } from "../../../Data/data";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const darkMode = useSelector((state) => state.store.darkMode);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  // bg-gradient-to-b from-[#f5faff] to-[#cce7f5]
  return (
    <div
      className={`  ${
        darkMode ? "bg-[#101215] text-white " : "bg-white"
      } w-full py-10 px-20  -md:px-10 -sm:px-6   mx-auto  `}
    >
      <div className="flex py-5 flex-col justify-center items-center mb-5">
        <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] mb-5 -xsm:mb-1 ">
          Common{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FAQ
          </span>
        </h1>
        <p className=" -xsm:text-sm text-xl flex items-center -xsm:text-center">
          <GoDotFill
            className="text-3xl text-green-500 animate-pulse-scale"
            aria-hidden="true"
          />{" "}
          Lets have a look at Frequently Asked Questions
        </p>
      </div>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="-xsm:text-sm border-b border-gray-300 pb-4 transition-all"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg -xsm:text-sm">{faq.question}</h3>
              <div className="text-xl">
                {activeIndex === index ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
