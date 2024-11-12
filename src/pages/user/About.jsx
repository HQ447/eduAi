import { useSelector } from "react-redux";

function About() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#101215]" : "bg-[#f7f7f7]"
      } flex flex-col px-20 -md:px-10 -sm:px-6 pt-10 pb-5 `}
    >
      <h1 className="w-full text-center text-[2rem] -xsm:text-[1.5rem] font-[600] mb-5 ">
        What is{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, #455be7 2.34%, #653bce 100.78%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          EduAI
        </span>
      </h1>
      <p
        className={` ${
          darkMode ? "text-white" : "text-[#000000b5] "
        } text-[1rem] text-justify -xsm:text-[.8rem]  `}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        suscipit assumenda velit! Atque adipisci deleniti ea est, qui cum dolor
        in, labore quibusdam praesentium quidem eveniet unde deserunt aperiam
        velit?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        suscipit assumenda velit! Atque adipisci deleniti ea est, qui cum dolor
        in, labore quibusdam praesentium quidem eveniet unde deserunt aperiam
        velit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nesciunt suscipit assumenda velit! Atque adipisci deleniti ea est, qui
        cum dolor in, labore quibusdam praesentium quidem eveniet unde deserunt
        aperiam velit?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        suscipit assumenda velit! Atque adipisci deleniti ea est, qui cum dolor
        in, labore quibusdam praesentium quidem eveniet unde deserunt aperiam
        velit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Nesciunt suscipit assumenda velit! Atque adipisci deleniti ea est, qui
        cum dolor in, labore quibusdam praesentium quidem eveniet unde deserunt
        aperiam velit?
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
        suscipit assumenda velit! Atque adipisci deleniti ea est, qui cum dolor
        in, labore quibusdam praesentium quidem eveniet unde deserunt aperiam
        <br />
        <br />
        <br />
        <b className={`${darkMode ? "text-white" : ""} text-xl -xsm:text-sm `}>
          Member-Name{" "}
        </b>
        <br />
        Founder & CEO of eduAI
      </p>
      <hr className="mt-4" />
    </div>
  );
}

export default About;
