import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/login/Login";
import Dashboard from "./Components/dashboard/Dashboard";
import Instruction from "./Components/instruction/Instruction";
import ReviewQuestion from "./Components/reviewQuestion/ReviewQuestion";
import Select from "./Components/selectTopic/Select";
import ContentDash from "./Components/ContentDash";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/review_question" element={<ReviewQuestion />} />
        <Route path="/select_topic" element={<Select />} />
        <Route path="/content_dash" element={<ContentDash />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
