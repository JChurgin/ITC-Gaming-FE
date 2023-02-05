import React from "react";
import tic from "./images/tic.png";
import twenty from "./images/twenty.png";
import "./Games.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiFillLock } from "react-icons/ai";
import { BsArrowReturnLeft } from "react-icons/bs";

export default function Games() {
  const navigate = useNavigate();

  const navigateTic = async () => {
    navigate("/ticInstructions");
  };

  const navigateTwenty = async () => {
    navigate("/twentyInstructions");
  };

  const navigateBack = async () => {
    navigate("/");
  };

  return (
    <>
      <body className="page-body">
        <BsArrowReturnLeft className="go-back" />
        <h2 className="game-title">Available games</h2>
        <div className="game-input">
          <AiOutlineSearch className="go" />
          <input placeholder="Search for a game.." className="input-text" />
        </div>
        <div className="game-container">
          <img src={tic} alt="tictactoe" className="game-image" />
          <div className="instructions-btn-container">
            <h3 className="game-name">Tic Tac Toe</h3>
            <button className="instructions-btn" onClick={navigateTic}>Instructions</button>
          </div>
        </div>
        <div className="game-container second-container">
          <img src={twenty} alt="2048" className="game-image" />
          <div className="instructions-btn-container">
            <h3 className="game-name">2048</h3>
            <button className="instructions-btn" onClick={navigateTwenty}>Instructions</button>
          </div>
        </div>
        <div className="game-container">
          <div className="black-jack-bg">
          <AiFillLock className="lock-icon"/>
          </div>
          <h3 className="game-name black-jack-name">Black Jack- coming soon!</h3>
        </div>
      </body>
    </>
  );
}
// everytime you finish working on your branch you do 
// git add . => git commit -m => git push upstream 
//git checkout main=> git pull => git merge yael =>git push
//git checkout yael => git pull origin main (this will pull the new main to your branch)