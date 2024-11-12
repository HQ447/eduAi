import { Route, Routes } from "react-router-dom";
import UserBoard from "./pages/user/UserBoard";
import Home from "./pages/user/home/Home";
import About from "./pages/user/About";
import Courses from "./pages/user/Courses";
import Resources from "./pages/user/resourses/Resources";
import CourceDetails from "./pages/user/CourceDetails";
import "./App.css";
import Login from "./pages/auth/Login";
import RegisterUser from "./pages/auth/RegisterUser";
import Discussions from "./pages/user/resourses/Discussions";
import SourceCode from "./pages/user/resourses/SourceCode";
import Guidlines from "./pages/user/resourses/Guidlines";
import Blogs from "./pages/user/resourses/Blogs";

function App() {
  return (
    <div className="flex w-full ">
      <video
        src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4"
        autoPlay
        loop
        muted
        className="fixed w-full object-cover h-full -z-10 opacity-75"
      ></video>

      <Routes>
        <Route path="/" element={<UserBoard />}>
          <Route index element={<Home />} />

          <Route path="resourses" element={<Resources />}>
            {/* Default to Discussions when /resourses is accessed */}
            <Route index element={<Discussions />} />
            <Route path="discussions" element={<Discussions />}>
              {/* Routes for different discussion topics */}
              <Route path="all" element={<h1>All Discussions</h1>} />
              <Route path="general" element={<h1>General</h1>} />
              <Route path="help" element={<h1>Help</h1>} />
            </Route>
            <Route path="sourcecode" element={<SourceCode />} />
            <Route path="guidlines" element={<Guidlines />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<About />} />
          <Route path="coursedetails" element={<CourceDetails />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterUser />} />
      </Routes>
    </div>
  );
}

export default App;
