import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGenerator from "./pages/ImageGenerator";
import NavBar from "./components/NavBar";
import Jsbot from "./pages/Jsbot";
import Sql from "./pages/Sql";
import Complexity from "./pages/Complexity";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/jsbot" element={<Jsbot />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/complexity" element={<Complexity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
