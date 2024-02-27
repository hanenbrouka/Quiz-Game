import React from "react";
import "./Nav.css";
import UserImage from "../image/user.jpg";

function Nav() {
  return (
      <nav className="nav">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Quiz Time</h1>
            </div>
            <div className="col" id="recherche">
              <input type="search" id="search" value="   Search.." />
            </div>
            <div className="col">
              <button className="btn bg-secondary text-white" type="submit">
                Start Quiz
              </button>
            </div>
            <div className="col" id="user">
              <img
                src={UserImage}
                alt=""
                id="img"
              />
              <p className="log">Oluwatobi..</p>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
