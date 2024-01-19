import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./css/layout.css";
const Layout = ({ children }) => {
  const handleNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      return;
      console.log("Notification Permission:", permission);
    } catch (error) {
      return;
      console.error("Error requesting notification permission:", error);
    }
  };
  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return;
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (error) => {
          return;
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      return;
      // console.error("Geolocation is not supported in this browser.");
    }
  };
  useEffect(() => {
    handleNotificationPermission();
    handleLocationPermission();
  });
  return (
    <div className="layout-container">
      <div className="layout-sidebar">
        <Sidebar />
      </div>
      <div className="layout-content">
        <div className="layout-content-part-2">
          <div className="up-layout-content">{children}</div>
          <div className="right-layout-content">
            <h2>Seggested for you</h2>
          </div>
        </div>
        <div className="down-layout-content"></div>
      </div>
    </div>
  );
};

export default Layout;
