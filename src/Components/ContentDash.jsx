import React, { useState } from "react";
import "./ContentDash.css";
import { Col, Row, Container } from "react-bootstrap";
import user from "../image/user.jpg";
import history from "../image/history.jpeg";
import medecin from "../image/medecin.jpeg";
import technology from "../image/technology.jpeg";
import agricol from "../image/agricol.jpeg";
import comeback from "../image/comeback.png";
import lucky from "../image/lucky.png";
import winner from "../image/winner.png";
import sport from "../image/sport.jpg";
import vector from "../image/Vector (1).png";
import horloge from "../image/horloge.png";
import check from "../image/check.png";

const ContentDash = ({ changeInterface }) => {
  const handleTopicSelect = () => {
    changeInterface("interface3"); // Assurez-vous que 'interface1' est le nom correct pour ContentDash
  };

  return (
    <Container className="container">
      <Row>
        <Col className="partie1">
          <img src={user} className="img" />
        </Col>
        <Col className="partie2">
          <div>
            <p className="p1">haroun brouka</p>
            <p className="p2">Bonus booster 24lv</p>
          </div>
          <div className="partie2">
            <div className="progress" role="progressbar">
              <div class="progress-bar w-75 "></div>
            </div>
            <div className="box">
              <div>
                <img src={vector} className="vector" />
                <p className="p3">
                  27 <br />
                  Quiz Passed
                </p>
              </div>
              <div>
                <img src={horloge} className="horloge" />
                <p className="p3">
                  27min <br />
                  Fatest Time
                </p>
              </div>
              <div>
                <img src={check} className="check" />
                <p className="p3">
                  200 <br />
                  Correct Answers
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Row">
        <Col className="partie3">
          <h2 className="h">Achievements</h2>

          <Col className="Partie31">
            <div className="achievement12">
              <img src={comeback} className="achievement12" />
            </div>
            <div>
              <img src={winner} className="achievement1"></img>
            </div>
            <div>
              <img src={lucky} className="achievement2" />
            </div>
          </Col>
        </Col>
        <Col className="partie4">
          <h2 className="h22">
            Featured Category
            <button
              className="link link_underline-opacity-0"
              onClick={handleTopicSelect}
            >
              View All
            </button>
            {/* <a class="link   link-underline-opacity-0 " href="http://localhost:3000/select_topic" >
             View All
            </a> */}
          </h2>

          <Col className="image-grid">
            <div>
              <img src={sport} title="Sport " className="categoryy1" />
            </div>
            <div>
              <img src={technology} className="categoryy1" />
            </div>
          </Col>
          <Col className="image-grid">
            <div>
              <img src={medecin} className="categoryy1" />
            </div>
            <div>
              <img src={history} className="categoryy1" />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ContentDash;
