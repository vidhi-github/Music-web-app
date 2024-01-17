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
import GetUserData from "../hooks/GetUserData";
const Home = () => {
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
  // console.log(auth.user._id);
  const handleLikeMusic = async (mid) => {
    try {
      console.log("like music");
      if (auth && auth?.user?.likesmusic.find((e) => e === mid)) {
        const unlike = await axios.put(
          `https://music-api-2rhl.onrender.com/api/v1/product/music-unlike/${auth.user._id}/${mid}`
        );

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
                        auth && auth.length > 0
                          ? handleLikeMusic(item._id)
                          : navigate("/authentication/user")
                      }
                    >
                      <FaHeart
                        style={{
                          color: `${
                            auth && auth.length > 0
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
