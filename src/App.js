import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import About from "./components/pages/About";
import Navbar from "./components/pages/layout/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Adduser from "./components/user/Adduser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<Adduser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/view/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
