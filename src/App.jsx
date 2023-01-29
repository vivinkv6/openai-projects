import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGenerator from "./pages/ImageGenerator";
import NavBar from "./components/NavBar";
import Jsbot from "./pages/Jsbot";
import Sql from "./pages/Sql";
import Complexity from "./pages/Complexity";
import AIchat from "./pages/AIchat";
import Ask from "./pages/Ask";
import BugFixer from "./pages/BugFixer";
import QuesAndAns from "./pages/QuesAndAns";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageGenerator />} />
        <Route path="/jsbot" element={<Jsbot />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/complexity" element={<Complexity />} />
        <Route path="/aichat" element={<AIchat />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/bugfixer" element={<BugFixer />} />
        <Route path="/ques" element={<QuesAndAns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
