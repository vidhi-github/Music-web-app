import React, { useState } from "react";
import "./css/loging.css";
const Loging = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="auth-container">
        <div className="auth-title-container">
          <p className="logo-heading">Hipogram</p>
          <div className="auth-button-container">
            <button className="auth-Button" onClick={() => setLogin(!login)}>
              Login
            </button>
            <button className="auth-Button" onClick={() => setLogin(!login)}>
              Register
            </button>
          </div>
        </div>
        <div className="auth-login-signup-container">
          <div
            className="auth-login"
            style={{ display: `${login ? "block" : "none"}` }}
          >
            <form>
              <input
                className="auth-input"
                type="phone"
                placeholder="Enter your Phone no"
              />
              <input
                className="auth-input"
                type="password"
                placeholder="Enter your Password"
              />
              <input className="auth-input" type="submit" />
            </form>
          </div>
          <div
            className="auth-signup"
            style={{ display: `${!login ? "block" : "none"}` }}
          >
            <form>
              <input
                className="auth-input"
                type="name"
                placeholder="Enter your Name"
              />
              <input
                className="auth-input"
                type="phone"
                placeholder="Enter your phone no"
              />
              <input
                className="auth-input"
                type="text"
                placeholder="Enter your user id"
              />
              <input
                className="auth-input"
                type="password"
                placeholder="Enter your Password"
              />
              <input className="auth-input" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loging;
