import React, { useState } from "react";
import "./css/loging.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "../components/Loader";
import Cookies from "js-cookie";

const Loging = () => {
  var config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [circle, setCircle] = useState(false);
  const [phone, setlPhone] = useState("");
  const [lpassword, setlPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (phone === "" || lpassword === "") {
        toast.error("field can't be empty");
        return;
      }
      setCircle(true);
      const data = await axios.post(
        "https://music-api-2rhl.onrender.com/api/v1/auth/login",
        {
          auth: phone,
          password: lpassword,
        },
        config
      );
      console.log(data?.data);
      if (data?.data?.success) {
        toast.success(data?.data?.message);
        Cookies.set("token", data.data.token, 180);
        localStorage.setItem("auth", JSON.stringify(data.data.user));
        setCircle(false);
        navigate("/");
      }
    } catch (error) {
      setCircle(false);
      console.log(error);
      toast.warning("Error in Login");
    }
  };
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
            <form onSubmit={handleLogin}>
              <input
                className="auth-input"
                type="phone"
                value={phone}
                onChange={(e) => setlPhone(e.target.value)}
                placeholder="Enter your Phone no"
              />
              <input
                className="auth-input"
                type="password"
                value={lpassword}
                onChange={(e) => setlPassword(e.target.value)}
                placeholder="Enter your Password"
              />
              <button type="submit" className="auth-btn">
                {circle ? <CircleLoader /> : "Submit"}
              </button>
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
              <button type="submit" className="auth-btn">
                {circle ? <CircleLoader /> : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loging;
