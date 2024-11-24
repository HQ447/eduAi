import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);

  // Animation Variants
  // const textVariants = {
  //   animate: {
  //     y: [0, -10, 0],
  //     color: ["#000000", "#784aeb", "#000000"],
  //     transition: {
  //       y: { duration: 1, repeat: Infinity, ease: "easeInOut" }, // Loop for the vertical animation
  //       color: { duration: 2, repeat: Infinity, ease: "linear" }, // Loop for the color animation
  //     },
  //   },
  // };

  return (
    <div className="bg-[#dcdcdc] w-full min-h-screen">
      <div className="bg-[#784aeb] pb-20 -xsm:pb-5 flex flex-col rounded-b-[4rem] -xsm:rounded-b-[2rem]">
        <div className="Nav flex justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4 -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>

        <div className="flex flex-col font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3 -xsm:w-16"
          />
          <h1 className="uppercase -xsm:text-sm">{activeUser.username}</h1>
          <p className="text-xl -xsm:text-sm">{activeUser.email}</p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default AccountSection;
