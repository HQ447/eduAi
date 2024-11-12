import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { useSelector } from "react-redux";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const darkMode = useSelector((state) => state.store.darkMode);

  const faqs = [
    {
      question: "Will I receive a certificate for each course?",
      answer:
        "Yes — each student who completes any course will receive a certificate of completion to acknowledge their proficiency. We encourage students to include these on their LinkedIn profiles and in their job applications!",
    },
    {
      question: "Can I get source code of each course?",
      answer:
        "Yes, you will have access to the source code for each course after enrollment.",
    },
    {
      question:
        "Can I ask about anything related course or if my code doesn't work?",
      answer:
        "Yes, our support team is available to help you with any questions related to the courses.",
    },
    {
      question: "Can I download any course videos?",
      answer:
        "Videos are available for streaming only, not for download, to protect intellectual property.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className={`  ${
        darkMode
          ? "bg-[#101215] text-white "
          : "bg-gradient-to-b from-[#f5faff] to-[#cce7f5]"
      } w-full  px-20 -md:px-10 -sm:px-6 -xsm:px-3  mx-auto py-8 `}
    >
      <div className="flex flex-col justify-center items-center mb-5">
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
          <GoDotFill className="text-3xl text-green-500" /> Lets have a look at
          Frequently Asked Questions
        </p>
      </div>
      <div className="space-y-4 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 transition-all"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg ">{faq.question}</h3>
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
