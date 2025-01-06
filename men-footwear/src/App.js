import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Products";
import Contact from "./Component/Contact";
import Notpage from "./Component/Notpage";
import Login from "./Component/Login";
import RegisterPage from "./Component/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<RegisterPage/>} />

          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Notpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
