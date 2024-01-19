import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./css/profile.css";
import { useAuth } from "../context/auth";
import { useParams } from "react-router-dom";
import { CircleLoader } from "../components/Loader";
import { IoMdSettings } from "react-icons/io";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import axios from "axios";
const Profile = () => {
  const pr = useParams();
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState();
  const userdata = async (userId) => {
    try {
      const data = await axios.get(
        `https://music-api-2rhl.onrender.com/api/v1/auth/user/${userId}`
      );
      if (data.data.success) {
        setUser(data.data);
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(pr);
  useEffect(() => {
    userdata(pr);
  }, [pr]);
  console.log(user);

  return (
    <div>
      <Layout>
        {auth.user ? (
          <div className="profile-all-data-container">
            {auth.user.profile.data ? (
              <img
                className="profile-dp"
                src={`https://music-api-2rhl.onrender.com/api/v1/auth/user-logo/${auth?.user?._id}`}
                alt="logo"
              />
            ) : (
              <img
                className="profile-dp"
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                alt="no"
              />
            )}
            <div className="profile-uper-data-container">
              <div className="profile-uper-data-container-uper">
                <h2>@{auth?.user?.userId}</h2>
                <button className="profile-edit-btn">Edit Profile</button>
                <Popup
                  trigger={
                    <button className="profile-btn-setting">
                      <IoMdSettings />
                    </button>
                  }
                  modal
                  nested
                  className="profile-popup"
                >
                  {(close) => (
                    <div className="model">
                      <ul className="profile-popup-window">
                        <li className="profile-popup-window-list">
                          <button className="profile-popup-window-list-btn">
                            Qr Code
                          </button>
                        </li>
                        <li className="profile-popup-window-list">
                          <button className="profile-popup-window-list-btn">
                            Setting and Privacy
                          </button>
                        </li>
                        <li className="profile-popup-window-list">
                          <button className="profile-popup-window-list-btn">
                            Logout
                          </button>
                        </li>
                        <li className="profile-popup-window-list">
                          <button
                            onClick={() => close()}
                            className="profile-popup-window-list-btn"
                          >
                            Close modal
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </Popup>
              </div>
              <div className="profile-uper-data-container-lower">
                <div className="p-playlist-data">
                  <p>100</p>
                  <h3>Playlist</h3>
                </div>
                <div className="p-playlist-data">
                  <p>100</p>
                  <h3>Followers</h3>
                </div>
                <div className="p-playlist-data">
                  <p>100</p>
                  <h3>Following</h3>
                </div>
              </div>
              <div className="profile-uper-data-container-last-lower">
                <h2>{auth?.user?.name}</h2>
                <p>{auth?.user?.bio}</p>
              </div>
            </div>
          </div>
        ) : (
          <CircleLoader />
        )}
      </Layout>
    </div>
  );
};

export default Profile;
