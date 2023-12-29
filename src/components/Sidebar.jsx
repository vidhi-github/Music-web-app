import React from "react";
import { ImHome } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { FaMusic } from "react-icons/fa6";
import { BiSolidNotification } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { BsChatHeartFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoReorderThree } from "react-icons/io5";
import "./css/sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <p className="logo-heading">Hipogram</p>
        <div className="side-list-icon-container">
          <ul className="list-container">
            <li className="list-icon">
              <a href="/" className="side-nav-link">
                <ImHome />
                <p className="list-text">Home</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/search" className="side-nav-link">
                <FaSearch />
                <p className="list-text">Search</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/music" className="side-nav-link">
                <FaMusic />
                <p className="list-text">Music</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/notifications" className="side-nav-link">
                <BiSolidNotification />
                <p className="list-text">Notification</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/explore" className="side-nav-link">
                <MdExplore />
                <p className="list-text">Explore</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/messages" className="side-nav-link">
                <BsChatHeartFill />
                <p className="list-text">Messages</p>
              </a>
            </li>
            <li className="list-icon">
              <a href="/profile" className="side-nav-link">
                <CgProfile />
                <p className="list-text">Profile</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar-bottom-setting">
          <a href="/more" className="side-nav-link">
            <IoReorderThree />
            <p className="list-text">More</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
