import React, { Component, useState } from "react";
import "./Login.css";
import loginImage from "../../image/login.png";
import { Col, Container, Row } from "react-bootstrap";
import Text from "./Text";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword,setShowPassword]=useState(false);
  
  const navigate = useNavigate();
  const handleShowPassword =(e) =>{
    e.preventDefault();
    setShowPassword(!showPassword); 
  }
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <Container fluid style={{ margin: 0 , padding: "0.1%" }}>
      <Row>
        <Col>
          <img src={loginImage} alt="login" className="image" />
        </Col>
        <Col>
          <div className="form1">
            <label className="phrase1">Login to your Account</label>
            <label className="phrase2">
              with your registered Email Address
            </label>
            <br />
            <br />

            <form className="box ">
              <div className="mb-3">
                <label className="form-label">Email address*</label>
                <input
                  type="email"
                  placeholder="     Enter email address"
                  className="form-control  "
                  aria-describedby="emailHelp"
                  id="idBtn"
                  // style={{ borderRadius: "100px" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Enter password*</label>
                <input
                  type={showPassword===true?'text' : 'password'}
                  placeholder="     Password"
                  className="form-control"
                  id="idBtn"
                  //style={{ borderRadius: "100px" }}
                />
                </div>
                <button className="show" onClick={(e)=>handleShowPassword (e)}>{showPassword===true?'hide':'show'}</button>
              
              <div className="mb-3 form-check">
                <input type="checkbox" class="form-check-input" checked />
                <label className="form-check-label">Remember my password</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                id="btn1"
                onClick={handleSubmit}
              >
                Login
              </button>
              <div className="separator-container">
                <div className="separator-line"></div>
                <div className="separator-text">or</div>
                <div className="separator-line"></div>
              </div>
             <div > <button type="button" class="btn" id="btn2">  Login with Google </button> </div>
              <div className="icon" >  <FcGoogle /></div>
               
                
             
            </form>
          </div>
        </Col>
      </Row>

      <Text />
    </Container>
  );
}

export default Login;
