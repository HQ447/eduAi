import "./style sheets/Home.css";

function Home() {
  return (
    <div className=" py-10 flex flex-col px-20 -md:px-10 -sm:px-6  bg-[#cce7f5] w-full">
      <div className="flex w-full  min-h-screen md:items-center -md:justify-center flex-wrap-reverse">
        <div className="flex basis-3/6  -md:basis-full  ">
          <h1 className="text-5xl -md:text-center w-full -sm:text-4xl font-bold lineHeight">
            Start your{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              programming Journey
            </span>{" "}
            with our Dedicated community!
          </h1>
        </div>
        <div className="flex basis-3/6 -md:basis-full -md:w-full ">
          <img
            src="https://www.becodemy.com/_next/static/media/banner.8a9f498b.svg"
            alt="img loading error"
            className=" "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
