import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom"
import { Context } from "./AppContext"
import LandingPage from './pages/LandingPage';
import TicTacToe from './pages/Tic-tac-toe';
import TwentyFourtyEight from './pages/TwentyFourtyEight';
import LoginModal from './pages/Login';
import SignupModal from './pages/SignUp';
import Games from './pages/Games';
import Profile from './pages/profile';
import Ranking from './pages/Ranking';
import HomeLoggedin from './pages/HomeLoggedin';
import TicInstructions from './pages/TicInstructions';
import TwentyInstructions from './pages/TwentyInstructions';
import IndividualRanking from './pages/IndividualRanking';

function App() {
  const { setProfile, profileRefresher } = useContext(Context);
const[IsAdmin,setIsAdmin]=useState(false)
  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");

        if (token&&username) {
          const res = await axios.get("/api/profile", { 
            params: { username }, 
            headers: { authorization: `Bearer ${token}`} 
          });
          setProfile(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const isAdmin = localStorage.getItem("role");
    if (isAdmin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
   
    getProfile();
  }, [profileRefresher]);
  return (
    <>
    {/* <AppContext.Provider> */}
     <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/TicTacToe" element={<TicTacToe/>} />
      <Route path="/2048" element={<TwentyFourtyEight/>} />
      <Route path="/login" element={<LoginModal/>} />
      <Route path="/signup" element={<SignupModal/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/games" element={<Games/>} />
      <Route path="/rank" element={<Ranking/>} />
      <Route path="/home" element={<HomeLoggedin/>} />
      <Route path="/ticInstructions" element={<TicInstructions/>} />
      <Route path="/twentyInstructions" element={<TwentyInstructions/>} />
      <Route path="/myscore" element={<IndividualRanking/>} />
     </Routes>
    {/* </AppContext.Provider> */}
    </>
  );
}

export default App;
