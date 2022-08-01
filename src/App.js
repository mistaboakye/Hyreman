import logo from "./logo.svg";
import "./App.css";
import Text from "./Text.js";
import Menu from "./Components/Menu/Menu";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Candidate from "./Routes/Candidate";
import Dashboard from "./Routes/Dashboard";
import Job from "./Routes/Job";
import ResumeBank from "./Routes/ResumeBank";
import TestLibrary from "./Routes/Test Library";
// import Login from "./Routes/Login";
import NavBar from "./Components/NavBar";



function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <Menu />
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="job" element={<Job />} />
        <Route path="candidate" element={<Candidate />} />
        <Route path="resumebank" element={<ResumeBank />} />
        <Route path="testlibrary" element={<TestLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
