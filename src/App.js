// import logo from './logo.svg';
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./Signup-componet/Signup";
import About from "./components/About";
import Contact from "./Contact-componet/Contact";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
