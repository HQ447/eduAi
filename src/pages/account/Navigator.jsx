import { useNavigate } from "react-router-dom";

function Navigator() {
  const navigate = useNavigate();
  return (
    <div className="flex border-2 flex-wrap w-fit justify-center py-10 px-20 min-h-[40vh]">
      <div
        onClick={() => navigate("my-learnings")}
        className="flex flex-col gap-2 shadow-md hover:scale-95 transition-all cursor-pointer shadow-black w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://img.freepik.com/free-photo/book-white-background_9975-6513.jpg"
          alt=""
          className=" w-32"
        />
        <p className="text-sm font-semibold">My Learnings</p>
      </div>
      <div
        onClick={() => navigate("my-learnings")}
        className="flex flex-col gap-2 shadow-md hover:scale-95 transition-all cursor-pointer shadow-black w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/856/303/small_2x/3d-rendering-certificate-isolated-useful-for-business-company-and-finance-design-illustration-png.png"
          alt=""
          className=" w-32"
        />
        <p className="text-sm font-semibold">Certifications</p>
      </div>
      <div
        onClick={() => navigate("my-learnings")}
        className="flex flex-col gap-2 shadow-md hover:scale-95 transition-all cursor-pointer shadow-black w-fit bg-white p-3 rounded-md"
      >
        <img
          src="https://png.pngtree.com/png-clipart/20231230/original/pngtree-3d-icon-account-settings-png-image_13975682.png"
          alt=""
          className=" w-32"
        />
        <p className="text-sm font-semibold">Account Settings</p>
      </div>
    </div>
  );
}

export default Navigator;
