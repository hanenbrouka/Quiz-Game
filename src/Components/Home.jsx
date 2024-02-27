import React from "react";
import "./Home.css";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

function Home() {
  return (
    <div id="sidebar">
  <div className="bouton">
    <div><button  className="bouton bg-secondary " href="#" type="submit">Dashboard</button></div>
    <div><button  className="bouton" href="#">Support</button></div>
    <div><button  className="bouton" href="#">Notifications</button></div>
    <div ><button className=" boutton" href="#">Log Out</button></div>
  </div>
</div>

  );
}

export default Home;
