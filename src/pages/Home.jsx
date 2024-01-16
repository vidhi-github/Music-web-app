import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "../components/Loader";
import MusicCammand from "../components/MusicCammand";
import "./css/home.css";
import { FaHeart } from "react-icons/fa6";
import { MdPlaylistAdd } from "react-icons/md";
import { FaShareSquare } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState();
  const [data, setData] = useState();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const getMusic = async () => {
    const result = await axios.get(
      "https://music-api-2rhl.onrender.com/api/v1/product/all-music"
    );
    if (result?.data?.success) {
      setData(result?.data?.music);
    } else {
      toast.error("Something Went wrong!!");
    }
  };
  const getUserData = async () => {
    try {
      const data = await axios.get(
        `https://music-api-2rhl.onrender.com/api/v1/auth/user/ateeshkumar`
      );
      if (data.data.success) {
        setUser(data.data.user);
        localStorage.setItem(auth, JSON.stringify(data.data.user));
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const likeMusic = async (mid) => {
    try {
      if (auth.user.likes.find((e) => e === mid)) {
        const unlike = await axios.put(
          `https://music-api-2rhl.onrender.com/api/v1/product/music-unlike/${auth.user._id}/${mid}`
        );
        console.log("like music");
        if (unlike.data.success) {
          toast.success(unlike.data.message);
          console.log(unlike.data.message);
        } else {
          console.log(unlike);
        }
        return;
      } else {
        const like = await axios.put(
          `https://music-api-2rhl.onrender.com/api/v1/product/music-like/${auth.user._id}/${mid}`,
          {}
        );
        return;
      }
    } catch (error) {
      console.log(error);
      toast.warning("Something went wrong!!");
    }
  };
  useEffect(() => {
    getMusic();
    getUserData();
  }, []);

  return (
    <div>
      <Layout>
        <div className="home-container">
          {data ? (
            data.map((item) => (
              <div className="home-music-card" key={item._id}>
                <img
                  src={`https://music-api-2rhl.onrender.com/api/v1/product/music-logo/${item._id}`}
                  alt="Logo"
                />
                <p className="home-music-card-text">{item.name}</p>
                <p className="home-music-card-text">Singer: {item.singer}</p>
                <MusicCammand
                  audio={`https://music-api-2rhl.onrender.com/api/v1/product/music-music/${item._id}`}
                  nextMuc={``}
                  prevMuc={``}
                />
                <div className="home-social-figure">
                  <ul className="home-social-figure-lisr-container">
                    <li
                      className="home-social-figure-lisr"
                      onClick={() =>
                        auth
                          ? likeMusic(item._id)
                          : navigate("/authentication/user")
                      }
                    >
                      <FaHeart
                        style={{
                          color: `${
                            auth
                              ? `${
                                  auth.user.likes.find((l) => l === item._id)
                                    ? "red"
                                    : "black"
                                }`
                              : "black"
                          }`,
                        }}
                      />
                    </li>
                    <li className="home-social-figure-lisr">
                      <MdPlaylistAdd fill="" />
                    </li>
                    <li className="home-social-figure-lisr">
                      <GiMusicSpell />
                    </li>
                    <li className="home-social-figure-lisr">
                      <FaShareSquare />
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
