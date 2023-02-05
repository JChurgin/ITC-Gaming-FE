import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsBoxArrowRight, BsBarChartFill } from "react-icons/bs";
import { FcPositiveDynamic } from "react-icons/fc";

import sixteen from "./images/16.png";
import tic from "./images/x.png";
import "./HomeLoggedin.css";
import lisa from "./images/lisa.jpeg";

export default function HomeLoggedin() {
  const navigate = useNavigate();

  const navigateTic = async () => {
    navigate("/TicTacToe");
  };

    const navigateTwenty = async () => {
        navigate("/2048")
    }

    const navigateRanking = async () => {
        navigate("/rank")
    }

    const navigateIndividualRanking = async () => {
        navigate("/myscore")
    }

    const navigateProfile = async () => {
        navigate("/profile")
    }


  const starStyle = { color: "#FFD233", fontSize: "0.95em", marginRight: "2.15px" };

  const iconStyle = { color: "white", fontSize: "1.5em" };
  return (
    <>
      <body className="page-body">
        <div className="loggedin-container">
          <div className="align-image-title">
            <h1 className="welcome-home">Welcome, Hadar!</h1>
            <img className="avatar" src={lisa} alt="avatar" />
          </div>
          <div className="score-container">
            <div className="score-div last-score-container">
              <div className="score-div-p">Last score</div>
              <div className="score-div-num">20</div>
            </div>
            <div className="vertical-line"></div>
            <div className="score-div highest-score-container">
              <div className="score-div-p">Highest score</div>
              <div className="score-div-num">75</div>
            </div>
          </div>
          <div className="first-text">What would you like to play?</div>
          <div className="game-input-two">
            <GoSearch className="GoSearch" />
            <input
              placeholder="Search for a game.."
              className="input-text"
            ></input>
          </div>
          <div className="popular-games">Popular games</div>
          <div className="home-game-container">
            <img src={tic} alt="game" className="game-img" />
            <div className="home-game-text">
              <h2 className="game-name-home">Tic tac toe</h2>
              <Link to="/ticInstructions" className="see-games">
                See instructions
              </Link>
              <div className="stars">
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
              </div>
            </div>
            <div>
              <button className="playnow-btn" onClick={navigateTic}>
                Play now
              </button>
            </div>
          </div>

          <div className="home-game-container">
            <img src={sixteen} alt="game" className="game-img" />
            <div className="home-game-text">
              <h2 className="game-name-home">2048</h2>
              <Link to="/twentyInstructions" className="see-games">
                See instructions
              </Link>
              <div className="stars">
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
                <AiFillStar style={starStyle} />
              </div>
            </div>
            <div>
              <button className="playnow-btn" onClick={navigateTwenty}>
                Play now
              </button>
            </div>
          </div>

          <div className="icon-container">
            <div>
              <FaMedal className="medal-icon" />
            </div>
            <div>
              <BsBarChartFill className="chart-icon" />
            </div>
            <div>
              <CgProfile style={iconStyle} />
            </div>
            <div>
              <BsBoxArrowRight style={iconStyle} />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
