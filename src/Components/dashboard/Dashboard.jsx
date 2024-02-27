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
      <div className="d-flex w-100">
        <Home />
        <ContentDash />
      </div>
    </div>
  );
};

export default Dashboard;
