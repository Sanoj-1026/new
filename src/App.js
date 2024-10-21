import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./components/About-us/AboutUs";
import Course from "./components/Courses-section/Courses"
import ExcellentSection from './components/Excellent-section/ExcellentSection';
import ContactUs from './components/Contact-Us/Registration';
import OnlineTuition from './components/Free-course-section/FreeCourse';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Course" element={<Course/>} />
          <Route path="/OnlineTuition" element={<OnlineTuition/>}/>
          <Route path="/ExcellentSection" element={<ExcellentSection/>}/>
          <Route path="/ContactUs" element={<ContactUs/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;