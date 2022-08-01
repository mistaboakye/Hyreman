import React from "react";
import "./App.css";

const Button = (props) => {
  const button = "button${props.type}"
  return (
    <div>
      <text className="loginButtonText">Signup</text>
    </div>
  );
};

export default Button;
