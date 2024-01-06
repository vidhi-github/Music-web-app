import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./css/layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-content">
        <div className="up-layout-content">{children}</div>
        <div className="down-layout-content"></div>
      </div>
    </div>
  );
};

export default Layout;
