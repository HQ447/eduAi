import { Route, Routes } from "react-router-dom";
import UserBoard from "./pages/UserBoard";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Courses from "./pages/user/Courses";
import Resources from "./pages/user/Resources";
import CourceDetails from "./pages/user/CourceDetails";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex w-full">
      <video
        src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4"
        autoPlay
        loop
        muted
        className="fixed w-full min-h-screen -z-10 opacity-75"
      ></video>

      <Routes>
        <Route path="/home" element={<UserBoard />}>
          <Route index element={<Home />} />
          <Route path="resourses" element={<Resources />} />
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<About />} />
          <Route path="coursedetails" element={<CourceDetails />} />
        </Route>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
