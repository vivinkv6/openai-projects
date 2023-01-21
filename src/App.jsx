import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGenerator from "./pages/ImageGenerator";
import NavBar from "./components/NavBar";
import Jsbot from "./pages/Jsbot";
import Sql from "./pages/Sql";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/jsbot" element={<Jsbot />} />
        <Route path="/sql" element={<Sql />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
