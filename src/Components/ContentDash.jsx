import React from "react";
import "./ContentDash.css";
import user from "../image/user.jpg";
import history from "../image/history.jpeg";
import medecin from "../image/medecin.jpeg";
import technology from "../image/technology.jpeg";
import agricol from "../image/agricol.jpeg";
import comeback from "../image/comeback.png";
import lucky from "../image/lucky.png";
import winner from "../image/winner.png";

const ContentDash = () => {
  return (
    <div className="content">
      <div className="container1 achievement ">
        <div className="marginright">
          <img className=" img1 marginright" src={user}></img>
        </div>
        <div className="user pl">
          <div className="name">
            <label className="name-user">Oluwatobi Olowu</label>
            <label className="level">Bonus booster 24lv</label>
          </div>
          <div className="ProgressPartie">
            <div
              class="progress"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar w-75"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1 cent">
        <div className="achievement">
          <label className="title">Achievement</label>
          <img className="row1" src={lucky} />
          <img className="row1" src={comeback} />
          <img className="row1" src={winner} />
        </div>
        <div className="achievement">
          <label className="title"> Featured Ctegory</label>
          <div class="row g-2">
            <div>
              <img className="category row1" src={history} alt="" />
              <img className="category row1" src={medecin} alt="" />
            </div>
            <div class="p-3">
              <img className="category row1" src={technology} alt="" />
              <img className="category row1" src={agricol} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDash;
