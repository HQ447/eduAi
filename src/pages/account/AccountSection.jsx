import { useSelector } from "react-redux";

function AccountSection() {
  const activeUser = useSelector((state) => state.store.activeUser);

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-[#784aeb] flex flex-col ">
        <div className="Nav flex justify-center text-semibold text-white w-full px-20 py-6 -xsm:py-4  -md:px-10 -sm:px-6 -xsm:px-3">
          EduAI
        </div>
        <hr />
        <div className="flex flex-col mb-32 font-semibold text-white text-2xl items-center justify-center w-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="bg-white rounded-full w-28 mb-3"
          />
          <h1 className=" uppercase">{activeUser.username}</h1>
          <p className="text-xl">{activeUser.email}</p>
        </div>
      </div>
    </div>
  );
}

export default AccountSection;
