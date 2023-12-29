import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./css/layout.css";
import PlayerMusic from "./PlayerMusic";
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-content">
        {children}
        <PlayerMusic />
      </div>
    </div>
  );
};

export default Layout;
