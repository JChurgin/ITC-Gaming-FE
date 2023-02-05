import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, FloatingLabel, Form, Spinner } from "react-bootstrap";
import { Alert, Typography } from "@mui/material";
import ErrorMessage from "../components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { BsArrowReturnLeft } from "react-icons/bs";
// import { Context } from "../components/UserContext";
// import { NavBarContext } from "../NavBars";

export default function SignupModal(props) {
  //   const { onModalClose } = props;
  //   const { setToken } = useContext(Context);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setErrror] = useState(null);
  const [userDetials, setUserDetials] = useState({
    nickName: "",
    email: "",
    password: "",
    repassword: "",
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();
  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserDetials((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
    setEmptyFields(emptyFields.filter((field) => field !== name));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        email: userDetials.email,
        password: userDetials.password,
        firstName: userDetials.firstName,
        lastName: userDetials.lastName,
        nickName: userDetials.nickName,
        repassword: userDetials.repassword,
      };
      const emptyFields = Object.keys(newUser).filter(
        (field) => !newUser[field]
      );
      if (emptyFields.length) {
        setEmptyFields(emptyFields);
        return;
      }
      // if(email){}
      setIsSpinnerVisible(true);
      const res = await axios.post("/api/users", newUser);
      // setToken(res.data.token);
      const userName = res.data.user.email;
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", userName);
      setIsSpinnerVisible(false);
      //   onModalClose();
    } catch (err) {
      setIsSpinnerVisible(false);
      if (err.response.status === 400) {
        setErrror("Email is already taken");
      }
      setTimeout(() => {
        setErrror(null);
      }, 3000);
    }
  };

  return (
    <body className="page-body">
      <BsArrowReturnLeft className="go-back" />
      <h2 className="signup-title">Join us now!</h2>
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handelSubmit}>
          <div className="align-first-last-name">
            <div className="form-group first-name-input">
              <input
                type="text"
                class="form-control"
                id="floatingFirstName"
                placeholder="First name"
                name="firstName"
                onChange={handelChange}
              />
              <div class="errorMessage"></div>
            </div>
            <div className="form-group last-name-input">
              <input
                type="text"
                class="form-control name-width"
                id="floatingLastName"
                placeholder="Last name"
                name="lastName"
                onChange={handelChange}
              />
              <div class="errorMessage"></div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="floatingNickname"
              placeholder="Nickname"
              name="nickName"
              onChange={handelChange}
            />
            <div class="errorMessage"></div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="floatingEmailAddress"
              placeholder="Email"
              name="email"
              onChange={handelChange}
            />
            <div class="errorMessage"></div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={handelChange}
            />
            <div class="errorMessage"></div>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="floatingPassword2"
              placeholder="Confirm password"
              name="repassword"
              onChange={handelChange}
            />
            <div class="errorMessage"></div>
          </div>
          <button type="submit" className="signup-btn">
            Sign up
          </button>
          <div class="spinner">
            <i class="fa fa-spinner fa-spin"></i>
          </div>
        </form>
        <p className="already-user" onClick={() => navigate("/login")}>Already a user? Please log in</p>
      </div>
    </body>
  );
}
