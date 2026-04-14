import React from "react";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import UsersDetails from "./pages/UsersDetails";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:userId" element={<UsersDetails/>}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
