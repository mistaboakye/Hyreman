import React from "react";
import "./App.css";
import Button from "./Button.js";

const Text = () => {
  return (
    <div>
      <div className="loginBoxHeading">Create an account</div>
      <p className="loginBoxSubheading">Get Started by creating an account</p>
      <div className="loginBoxMain">
        <div className="loginContainer">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="loginInputContainer"
          ></input>
        </div>
        <div className="loginContainer">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="loginInputContainer"
          ></input>
        </div>
      </div>
      <div className="loginBoxEmail">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          className="loginInputContainer1"
        ></input>
      </div>
      <div className="loginBoxPassword">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="loginInputContainer1"
        ></input>
      </div>
      <button type="text" className="loginButton">
        <Button />
      </button>
    </div>
  );
};

export default Text;
