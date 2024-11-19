// import { useSelector } from "react-redux";

import "../style sheets/Home.css";
import Courses from "../Courses";
import Mainpage from "./Mainpage";
import Feedback from "./Feedback";
import CircleComponent from "../../../components/CircleComponent";
import FAQ from "./FAQ";
// import Slider from "../../../components/Slider";

function Home() {
  // const darkMode = useSelector((state) => state.store.darkMode);

  return (
    <div className="w-full">
      <Mainpage />
      <CircleComponent />
      {/* <Slider /> */}
      <Courses />
      {/* call the backend api for feedbacks , feedbacks will store in database */}
      <Feedback />
      {/* call the backend api for FAQs  , feedbacks will store in database */}
      <FAQ />
    </div>
  );
}

export default Home;
