import React from "react";

const ErrorMessage = ({ field, emptyFields }) => {
  if (!emptyFields.includes(field)) {
    return null;
  }

  const errorMessages = {
    email: "Email field is empty",
    password: "Password field is empty", 
    repassword: "Repassword field is empty", 
    repasswordNotMatch: "Password does not match",     
    firstName: "First Name field is empty",      
    lastName: "Last Name field is empty",      
    nickName: "nickName field is empty",      
    role: "role is Undifiend"
  };

  return <p style={{ color: "red" }}>{errorMessages[field]}</p>;
};



export default ErrorMessage;
