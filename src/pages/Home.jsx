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
const Home = () => {
  const [data, setData] = useState();
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
  useEffect(() => {
    getMusic();
  }, []);
  console.log(data);
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
                />
                <div className="home-social-figure">
                  <ul className="home-social-figure-lisr-container">
                    <li className="home-social-figure-lisr">
                      <FaHeart style={{ color: "red" }} />
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
