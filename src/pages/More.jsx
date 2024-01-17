import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useAuth } from "../context/auth";
const More = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>
        <button onClick={() => handleLogout}>Logout</button>
      </div>
    </Popup>
  );
};

export default More;
