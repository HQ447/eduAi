import { useSelector } from "react-redux";

function About() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#01090a]" : ""
      } flex flex-col px-20 -md:px-10 -sm:px-6 pt-28 pb-5`}
    >
      <h1 className="w-full text-center text-[2rem] font-[600] mb-5 ">
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
          darkMode ? "text-white" : "text-[#000000b5]"
        } text-lg text-justify `}
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
        <b className={`${darkMode ? "text-white" : "text-black"} text-xl `}>
          <u>Hammad Ahmad</u>{" "}
        </b>
        <br />
        Founder & CEO of eduAI
      </p>
      <hr className="mt-4" />
    </div>
  );
}

export default About;
