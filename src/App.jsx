import { Route, Routes } from "react-router-dom";
import UserBoard from "./pages/UserBoard";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Courses from "./pages/user/Courses";
import Resources from "./pages/user/Resources";
import CourceDetails from "./pages/user/CourceDetails";
import "./App.css";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UserBoard />}>
          <Route index element={<Home />} />
          <Route path="resources" element={<Resources />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<About />} />
          <Route path="coursedetails" element={<CourceDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
