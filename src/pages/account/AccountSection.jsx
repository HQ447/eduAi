import { useSelector } from "react-redux";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-[#784aeb] pb-32  flex flex-col ">
        <div className="Nav flex  justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4  -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>
        <hr />
        <div className="flex flex-col font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3"
          />
          <h1 className=" uppercase">{activeUser.username}</h1>
          <p className="text-xl">{activeUser.email}</p>
        </div>
      </div>
      <div className="px-20 relative py-16 -xsm:py-4  -md:px-10 -sm:px-6 -xsm:px-3">
        <div className="absolute rounded-md -top-8 left-0 right-0 shadow-lg mx-auto py-8 px-3 w-[60%] bg-white">
          popup
        </div>
        List of Purchased Courses
      </div>
    </div>
  );
}

export default AccountSection;
