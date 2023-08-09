import React from "react";
import "./register.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connect with friends around the world
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User Name " className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password??</span>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
