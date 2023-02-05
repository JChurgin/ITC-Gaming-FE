import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import {AiFillCrown} from "react-icons/ai";
import ProfileImage from "./images/profile-image.png";
import { useNavigate } from 'react-router-dom';
import "./Ranking.css"

function Ranking() {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  const [allScores, setAllScores] = useState([]);

  const navigate = useNavigate()
 
  const navigateBack = async () => {
    navigate("/home");
  };

  const iconStyle = { color: "yellow", fontSize: "1.5em" }

  //     useEffect(()=>{
  //         const getScores = async () => {
  //             // setLoading(true);
  //             const res = await axios.get("/api/scores");
  //             setAllScores(res.data);
  //             for (const score of res.data) {
  //                 const user = await axios.get(`/api/scores/${score.userId}`)
  //                 score.user = user
  //             }
  //             // setLoading(false);
  //           };
  // getScores()
  //     },[])
  
  useEffect(() => {
    const getScores = async () => {
      const res = await axios.get("/api/score", {
        params: { username },
        headers: { authorization: `Bearer ${token}` },
      });
      setAllScores(res.data);
    };
    getScores();
  }, []);

  useEffect(() => {}, [allScores]);

  return(
    <>
    <h1>LeaderBoard</h1>
    <BsArrowReturnLeft className="go-back" onClick={navigateBack} />
    <div>
    <div>1</div>
    <AiFillCrown style={iconStyle} />
      <img src={ProfileImage} className="profile-image" />
      <div>@danimili</div>
      <div>1,000,000</div>
    </div>
      <img src={ProfileImage} className="profile-image" />
      <img src={ProfileImage} className="profile-image" />

      <div>
      <img src={ProfileImage} className="profile-image" />
      <div>@danimili</div>

      </div>
    </>
  ) 
}

export default Ranking;
