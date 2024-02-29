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
    <div className="block">
      <div className="row">
        <div className="col-2">
          <img className="imguser" src={user} alt="*"></img>
        </div>
        <div className="col-8">
          <label className="label1">Haroun Brouka</label><br/>
          <label className="label2">Bonus booster 24lv</label>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="labelachievement">
            <label>Achievement</label>
          </div>
          <div className="imgachievement">
            <img className="imgachievement1" src={lucky} />
            <img className="imgachievement2" src={comeback} />
            <img className="imgachievement3" src={winner} />
          </div>
        </div>
        <div className="col-5">
          <div className="labelcategory">
            <label> Featured Category</label>
          </div>
          <div class="imgcategory">
          <div className="category1">
            <img className="imgcategory " src={history} alt="*" />
            <img className="imgcategory " src={medecin} alt="*" />
          </div>
          <div className="category1">
            <img className="imgcategory " src={technology} alt="*" />
            <img className="imgcategory " src={agricol} alt="*" />
          </div>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDash;
