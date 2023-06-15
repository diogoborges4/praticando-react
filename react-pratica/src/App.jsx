import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <NavLink><NavBar/></NavLink>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
