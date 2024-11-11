// import { useSelector } from "react-redux";

import "../style sheets/Home.css";
import Courses from "../Courses";
import Mainpage from "./Mainpage";
import Feedback from "./Feedback";
import CircleComponent from "../../../components/CircleComponent";
import Slider from "../../../components/Slider";

function Home() {
  // const darkMode = useSelector((state) => state.store.darkMode);

  return (
    <div>
      <Mainpage />
      <Courses />
      <CircleComponent />
      <Slider />
      <Feedback />
    </div>

    // <div
    //   className={`${
    //     darkMode
    //       ? "bg-[#101215] text-white "
    //       : "bg-gradient-to-b from-[#cce7f5] to-[#f5faff]"
    //   }    flex flex-col px-20 -md:px-10 -sm:px-6 -xsm:px-3   w-full transition-all`}
    // >
    //   <div className="flex w-full pt-14 py-8 md:items-center -md:justify-center flex-wrap-reverse">
    //     <div className="flex flex-col gap-5  basis-3/6 -md:basis-full  ">
    //       <h1 className=" -xsm:text-[1.3rem] text-5xl -md:text-center w-full -sm:text-4xl font-[600] lineHeight">
    //         Start your{" "}
    //         <span
    //           style={{
    //             background:
    //               "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //           }}
    //         >
    //           programming Journey
    //         </span>{" "}
    //         with our Dedicated community!
    //       </h1>
    //       <p
    //         className={` ${
    //           darkMode ? "text-white" : "text-[#000000b5] "
    //         } -xsm:text-sm text-xl -md:text-center`}
    //       >
    //         Begin your coding adventure in our community, where learning is
    //         always appreciated and valued.
    //       </p>
    //       <button className="rounded-full -xsm:text-sm -md:mx-auto max-w-fit py-2 px-5 bg-[#2190ff] text-white font-semibold">
    //         Explore Resources
    //       </button>
    //     </div>
    //     <div className="flex basis-3/6  -md:basis-full -md:w-full ">
    //       <img
    //         src="https://www.becodemy.com/_next/static/media/banner.8a9f498b.svg"
    //         alt="img loading error"
    //         className=" "
    //       />
    //     </div>
    //   </div>
    //   {/* <div
    //     className={` ${
    //       darkMode ? "bg-[#101215] text-white " : ""
    //     } pt-28 px-20 -md:px-10 -sm:px-6 pb-5  `}
    //   >
    //     <div className="flex flex-col justify-center items-center mb-5">
    //       <h1 className="-xsm:text-2xl w-full text-center text-4xl font-[600] mb-5 ">
    //         Popular{" "}
    //         <span
    //           style={{
    //             background:
    //               "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //           }}
    //         >
    //           Cources
    //         </span>
    //       </h1>
    //       <p className="text-xl flex items-center -xsm:text-center -xsm:text-sm">
    //         <GoDotFill className="text-3xl text-green-500" /> Our comprehensive
    //         project based courses
    //       </p>
    //     </div>
    //     <div className="flex flex-wrap justify-center gap-5">
    //       {courseCollection.map((obj) => (
    //         <div
    //           key={obj.id}
    //           className={`${
    //             darkMode ? "bg-[#242424] text-white " : "bg-white "
    //           } flex w-80 flex-col p-5 gap-3 rounded-md shadow-lg`}
    //         >
    //           <img
    //             src={obj.img}
    //             className="w-full rounded-lg"
    //             alt="cource img loading error"
    //           />
    //           <h1 className="">{obj.title}</h1>
    //           <div className="flex justify-between">
    //             <p>{obj.rating}Rating</p>
    //             <p>{obj.students} Students</p>
    //           </div>
    //           <div className="flex justify-between">
    //             <p>
    //               ${obj.new_price}{" "}
    //               <del className="text-red-600">${obj.old_price}</del>
    //             </p>
    //             <p>{obj.lectures} Lectures</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}

    //   <Courses />
    // </div>
  );
}

export default Home;
