import React, { useContext, useState } from "react";
import { Form, FloatingLabel, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
// import { Context } from "../components/UserContext";
import ErrorMessage from "../components/ErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { BsArrowReturnLeft } from "react-icons/bs";

function LoginModal(props) {
  const { onModalClose } = props;
  //   const { setToken } = useContext(Context);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const [error, setErrror] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();
  const [LoginDetials, setLoginDetials] = useState({
    email: "",
    password: "",
  });
  console.log(LoginDetials);
  const handelChange = (e) => {
    const { name, value } = e.target;
    setLoginDetials((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const userLogin = {
        email: LoginDetials.email,
        password: LoginDetials.password,
      };
      const emptyFields = Object.keys(userLogin).filter(
        (field) => !userLogin[field]
      );
      if (emptyFields.length) {
        setEmptyFields(emptyFields);
        return;
      }
      // if(email){}
      setIsSpinnerVisible(true);
      const res = await axios.post("/api/users/login", userLogin);

      console.log(res.data);
      console.log(res);
        // setToken(res.data.token);
      localStorage.setItem("username", res.data.user.email);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("token", res.data.token);

      // localStorage.setItem('token',res.data.token)

      // if (res.data.role==="admin") {
      //   console.log("adminData")
      //   window.location = '/admin';
      // }
      onModalClose();
      setIsSpinnerVisible(false);
    } catch (err) {
      setIsSpinnerVisible(false);
      if (err.response.status === 404) {
        console.log(err.response.data);
      }
      setTimeout(() => {
        setErrror(null);
      }, 3000);
    }
  };
  return (
    <body className="page-body">
      <BsArrowReturnLeft className="go-back" />
      <h2 className="login-title">Log in</h2>
      <div className="signup-form-container">
      <form onSubmit={handelSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="name@example.com"
            name="email"
            onChange={handelChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handelChange}
          />
        </div>
        <div>
          <button className="signup-btn" type="submit">Login</button>
          <a href="/signup" className="already-user not-a-user">Not a user? Please register</a>
        </div>
      </form>
      </div>
    </body>
  );
}

export default LoginModal;
