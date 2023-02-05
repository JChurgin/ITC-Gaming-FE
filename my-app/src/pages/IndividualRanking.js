import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowReturnLeft } from "react-icons/bs";
import ProfileImage from "./images/profile-image.png";
import { FaMedal } from "react-icons/fa";
import tic from "./images/tic-logo.png";
import sixtyfour from "./images/sixtyfour.png";
import "./IndividualRanking.css";
import ProgressBar from "./ProgressBar";

const testData = [
  { bgcolor: "#FFE03F", completed: 60 },
  // { bgcolor: "#FFE03F", completed: 30 },
  // { bgcolor: "#FFE03F", completed: 53 },
];

function IndividualRanking() {
  const iconStyle = { color: "yellow", fontSize: "1.5em" };

  const navigate = useNavigate();

  const navigateBack = async () => {
    navigate("/home");
  };

  useEffect(() => {
    const getUserScore = async () => {
      const res = await axios.get("/api/score/userscores");
      console.log(res.data);
    };
    getUserScore();
  }, []);

  return (
    <>
      <body className="page-body">
        <BsArrowReturnLeft className="go-back" onClick={navigateBack} />
        <div className="individual-img-div">
          <img
            src={ProfileImage}
            className="individual-image"
            alt="profile-pic"
          />
        </div>
        <h3 className="full-name-ranking">David Cohen</h3>
        <div className="level-text">Advanced</div>
        <div className="score-container-two">
          <div className="score-div last-score-container">
            <div className="score-div-p">Total score</div>
            <div className="score-div-num">3245</div>
          </div>
          <div className="vertical-line"></div>
          <div className="score-div highest-score-container">
            <div className="score-div-p">Times played</div>
            <div className="score-div-num">75</div>
          </div>
        </div>
        <div className="individual-ranking-pd">
          <div className="level-medal-container">
            <div className="level-div">
              Level: <span className="yellow">8</span>
            </div>
            <FaMedal className="medal-icon" />
          </div>
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
          <div className="levels-nums-container">
            <div>0</div>
            <div>10
              0</div>
          </div>
          <div className="your-records">Your records</div>
          <div className="records-main-container">
            <div className="records-individual-container">
              {" "}
              <img src={tic} alt="tictactoe" className="game-icon-ranking" />
              <div className="game-name-ind-rank">Tic tac toe</div>
              <div className="total-score">Total score: <span className="green-number">10</span></div>
            </div>
            <div className="records-individual-container">
              {" "}
              <img src={sixtyfour} alt="tictactoe" className="game-icon-ranking" />
              <div className="game-name-ind-rank">Tic tac toe</div>
              <div className="total-score">Total score: <span className="green-number">10</span></div>
            </div>
            <div className="records-individual-container">
              {" "}
              <img src={sixtyfour} alt="tictactoe" className="game-icon-ranking" />
              <div className="game-name-ind-rank">Tic tac toe</div>
              <div className="total-score">Total score: <span className="green-number">10</span></div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default IndividualRanking;
