import React from "react";
import "./Dashboard.css";
import Nav from "../Nav";
import Home from "../Home";
import ContentDash from "../ContentDash";
import rectangle from "../../image/Rectangle 31.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
    
        <Home />
        <div className="contenue">
        <ContentDash />
      </div>
    </div>
  );
};

export default Dashboard;
