import React from "react";
import "./Nav.css";
import User from "../image/user.jpg";

function Nav() {
  return (
    <div className="navbar">
   
   <div className="search">
                
                <input
                 
                  placeholder="      Q  Search"
                  className="search"
                  id="search"
                 
                />
                </div>
      
    <div className="button">
    <button className="button">Start</button>
    </div>
  
    
   
    <div className="user">
    <img src={User} className="imgUser" alt=""/>
    <a href="" className="navbar-link">Haroun Brouka</a>
    </div>
   </div>
  );
}

export default Nav;