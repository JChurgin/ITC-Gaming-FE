import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./LandingPage.css";
import landing from "./images/landing.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const navigateLogin = async () => {
    navigate("/signup");
  };

  return (
    <>
      <body className="body-landing">
        <img src={landing} className="gaming-img" alt="gaming-img" />
        <div className="circle-deco"></div>
        <div className="circle-deco-two"></div>
        <h1 className="home-title">Adding fun to your life!</h1>
        <p id="see-games" onClick={() => navigate("/games")}>See games</p>
        <div className="btn-container">
        <button className="get-started-btn" onClick={navigateLogin}>Get started</button>
        </div>
        
        {/* <button onClick={navigateTic}>Tic-Tac-Toe</button>
    <button onClick={navigateTwenty}>2048</button> */}
      </body>
    </>
  );
}
