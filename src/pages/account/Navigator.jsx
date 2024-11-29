import { useNavigate } from "react-router-dom";

function Navigator() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-8 -xsm:gap-3 -xsm:px-3 -xsm:10  w-full flex-wrap  justify-center py-10 -xsm:pt-16 px-20 min-h-[40vh]">
      <div
        onClick={() => navigate("my-learnings")}
        className="flex h-fit  flex-col gap-2 items-center shadow-lg border-2 hover:scale-95 transition-all cursor-pointer  w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://img.freepik.com/free-photo/book-white-background_9975-6513.jpg"
          alt=""
          className=" w-32 -sm:w-16 "
        />
        <p className="text-sm -sm:text-xs font-semibold">My Learnings</p>
      </div>
      <div
        onClick={() => navigate("certification")}
        className="flex  h-fit flex-col items-center gap-2 shadow-lg border-2 hover:scale-95 transition-all cursor-pointer  w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/856/303/small_2x/3d-rendering-certificate-isolated-useful-for-business-company-and-finance-design-illustration-png.png"
          alt=""
          className=" w-32 -sm:w-16 "
        />
        <p className="text-sm -sm:text-xs font-semibold">Certifications</p>
      </div>
      <div
        onClick={() => navigate("settings")}
        className="flex h-fit  flex-col gap-2 items-center shadow-md border-2 hover:scale-95 transition-all cursor-pointer  w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://png.pngtree.com/png-clipart/20231230/original/pngtree-3d-icon-account-settings-png-image_13975682.png"
          alt=""
          className=" w-32 -sm:w-16 "
        />
        <p className="text-sm -sm:text-xs font-semibold">Account Settings</p>
      </div>
    </div>
  );
}

export default Navigator;
