import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { Context } from "../AppContext";
import { BsArrowReturnLeft } from "react-icons/bs";
import ProfileImage from "./images/profile-image.png";
import { MdModeEditOutline } from "react-icons/md";
import "./profile.css";

function Profile() {
  const { setProfile, profile } = useContext(Context);
  const [insideProfile, setInsideProfile] = useState({ ...profile });
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const token = localStorage.getItem("token");
  console.log(profile);
  useEffect(() => {
    setInsideProfile({ ...profile });
  }, [profile]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setInsideProfile((prevProfile) => {
      return {
        ...prevProfile,
        [name]: value,
      };
    });
  };
  function handelSubmit(e) {
    e.preventDefault();
    const res = axios.patch(
      `/api/users/${profile._id}`,
      { ...insideProfile, oldPassword, newPassword },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    setProfile(insideProfile);
    localStorage.setItem("username", insideProfile.email);
    console.log(res);
  }
  return (
    <body className="page-body">
      <BsArrowReturnLeft className="go-back" />
      <div className="profile-img-div">
        <img src={ProfileImage} className="profile-image" />
        <div className="edit-btn">
          <MdModeEditOutline className="edit-emoji" />
        </div>
      </div>
      <h3 className="full-name-title">David Cohen</h3>
      <div className="signup-form-container">
        <form onSubmit={handelSubmit}>
          <div class="row mb-3">
            <div className="align-first-last-name">
              <div class="form-group first-name-input">
                <input
                  class="form-control-profile"
                  type="text"
                  id="formGridFirstName"
                  name="firstName"
                  onChange={handelChange}
                  // value={insideProfile.firstName}
                  value="David"
                />
              </div>
              <div>
                <div class="form-group last-name-input">
                  <input
                    class="form-control-profile"
                    type="text"
                    id="formGridLastName"
                    name="lastName"
                    onChange={handelChange}
                    // value={insideProfile.lastName}
                    value="Cohen"
                  />
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-6 col-lg-6 mb-3">
              <div class="form-group">
                <input
                  class="form-control-profile"
                  type="text"
                  id="formGridnickName"
                  name="nickName"
                  onChange={handelChange}
                  // value={insideProfile.nickName}
                  value="mrdavid"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="row">
              <div class="col-xs-12 col-md-6 col-lg-6 my-4">
                <div class="form-group">
                  <input
                    class="form-control-profile"
                    type="password"
                    id="formGridPhoneNumber"
                    // value={oldPassword}
                    value="Old password"
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-xs-12 col-md-6 col-lg-6 my-4">
                <div class="form-group">
                  <input
                    class="form-control-profile"
                    type="password"
                    id="formGridPhoneNumber"
                    // value={newPassword}
                    value="New password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        <button type="submit" className="signup-btn">
          Save changes
        </button>
      </div>
    </body>
  );
}

export default Profile;
