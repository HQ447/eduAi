import { useSelector } from "react-redux";

function About() {
  const darkMode = useSelector((state) => state.store.darkMode);
  return (
    <div
      className={`${
        darkMode ? "text-white bg-[#0f1113]" : "bg-[#fff]"
      } flex flex-col px-20 -md:px-10 -sm:px-6 pt-10 pb-5 `}
    >
      <h1 className="w-full text-center text-[2rem] -xsm:text-[1.5rem] font-[600] mb-5 ">
        What is{" "}
        <span
          style={{
            background:
              "linear-gradient(90deg, rgb(234 88 12) 2.34%, rgb(229 3 3) 100.78%)",
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
        At Edu-AI, we are dedicated to transforming education by providing an
        innovative e-learning platform designed for a diverse range of learners.
        Whether you’re preparing for competitive exams, school exams, enhancing
        your skills with IT courses, or pursuing academic success in college,
        Edu-AI offers comprehensive resources tailored to your needs. We aim to
        make quality education accessible to everyone, anywhere, anytime.
        <br />
        <br />
        Our mission is to empower learners with a platform that combines
        advanced technology and carefully crafted content. From foundational
        school subjects and exam preparation courses to professional
        skill-building programs, we cater to students of all ages and academic
        levels. With interactive tools and personalized learning paths, Edu-AI
        is committed to helping you achieve your goals, whether it’s excelling
        in academics, passing crucial exams, or advancing in your career.
        <br />
        <br />
        Edu-AI stands apart by addressing the unique needs of learners in
        Pakistan and beyond. We believe education is the key to unlocking
        potential, and our platform ensures you have the resources and support
        needed to succeed. Join us in shaping a future where learning is not
        limited by boundaries and everyone has the opportunity to thrive.
        <br /> <br />
        Together, let’s redefine education for a smarter, more connected world.
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
