import React from "react";
import "./Home.css";
import { BiSolidLogOut } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

function Home() {
  return (
    <div className="sidebar">
    <label><h1 href="#" className="titre">Quiz Time</h1></label>
    <div className="menu">
    <div><a href="#" className="sidebar-link"><MdDashboard /> Dashboard</a></div>
    <div><a href="#" className="sidebar-link"><BiSupport /> Support</a></div>
    <div><a href="#" className="sidebar-link"><IoMdNotifications /> Notification</a></div>

    <div className="logout">

    <a href="#" className="sidebar-link logout"><BiSolidLogOut /> Log Out</a></div>

    </div>
   </div>
  );
}

export default Home;