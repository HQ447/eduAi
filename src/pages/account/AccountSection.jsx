//import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import svg from "../../assets/images/2waves.png";

function AccountSection() {
  //const activeUser = useSelector((state) => state.store.activeUser);
  // const navigate = useNavigate();
  // const [active, setActive] = useState(1);
  // const darkMode = useSelector((state) => state.store.darkMode);
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
    <div className="w-full min-h-screen">
      <div className=" relative bg-[#1E3A8A] flex flex-col gap-6 ">
        {/* <div
          className={` ${
            darkMode
              ? "bg-[#000000d6] text-white"
              : " bg-white text-[#000000b5] "
          } flex relative z-1 px-20 py-4 justify-center -xsm:py-3 items-center -md:px-10 -sm:px-6 -xsm:px-3  w-full  transition-all`}
          style={{
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <NavLink to={""} className={"flex items-center gap-1"}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4729/4729436.png"
              alt="loading error"
              className="w-6"
            />
            <h1 className="text-xl font-semibold -xsm:text-xl">
              edu
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #455be7 2.34%, #C 100.78%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI
              </span>
            </h1>
          </NavLink>
          <NavLink
            to={"/"}
            className={
              "absolute right-8 -xsm:right-3 text-xs text-white rounded-sm px-2 py-1 bg-[#8971c5]"
            }
          >
            Back
          </NavLink>
        </div> */}
        {/* <svg
          className="absolute top-0 w-full h-72"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0099ff"
            d="M0,192L80,197.3C160,203,320,213,480,218.7C640,224,800,224,960,208C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg> */}
        <div className="relative flex flex-col items-center justify-center w-full my-10 text-2xl font-semibold text-white -xsm:mt-5 -xsm:mb-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3781/3781986.png"
            alt="img loading error"
            className="mb-3 bg-white rounded-full w-28 -xsm:w-16"
          />
          <h1 className="uppercase -xsm:text-sm">Ali</h1>
          <p className="text-xl -xsm:text-sm">ali@gmail.com</p>
        </div>
        {/* <div className="absolute bottom-0 flex justify-center w-full gap-7 ">
          <p
            className={` ${
              active == 1 ? "border-b-4 " : ""
            } -xsm:text-[10px] cursor-pointer `}
            onClick={() => {
              setActive(1);
              navigate("");
            }}
          >
            Learnings
          </p>
          <p
            className={` ${
              active == 2 ? "border-b-4 border-white" : ""
            }  -xsm:text-[10px] cursor-pointer`}
            onClick={() => {
              setActive(2);
              navigate("certification");
            }}
          >
            Certification
          </p>
          <p
            className={` ${
              active == 3 ? "border-b-4 border-white" : ""
            }  -xsm:text-[10px] cursor-pointer `}
            onClick={() => {
              setActive(3);
              navigate("Settings");
            }}
          >
            Settings
          </p>
        </div> */}
        {/* <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            d="M0,96L120,122.7C240,149,480,203,720,213.3C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg> */}
      </div>

      <div className="relative px-10 py-16 bg-white -xsm:py-2 -sm:px-16 -xsm:px-7">
        {/* <svg
          className="absolute top-0 left-0 w-full h-20 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none" // Allows independent height and width
        >
          <path
            fill="#fff"
            d="M0,256L120,224C240,192,480,128,720,133.3C960,139,1200,213,1320,250.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg> */}
        <img
          src={svg}
          alt=""
          className="absolute top-0 left-0 w-full h-20 -xsm:h-10"
        />

        <Outlet />
      </div>
    </div>
  );
}

export default AccountSection;
