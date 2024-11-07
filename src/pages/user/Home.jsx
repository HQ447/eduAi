function Home() {
  return (
    <div className=" py-10 flex flex-col px-20  bg-[#cce7f5] w-full">
      <div className="flex w-full  min-h-screen justify-center items-center -lg:flex-wrap-reverse">
        <div className="flex basis-3/6 justify-center">
          <h1 className="text-5xl">
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
        <div className="flex basis-3/6 justify-center">
          <img
            src="https://www.becodemy.com/_next/static/media/banner.8a9f498b.svg"
            alt="img loading error"
            className="w-[30rem] -md:w-[50rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
