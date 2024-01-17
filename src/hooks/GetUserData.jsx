import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";

const GetUserData = () => {
  const [auth, setAuth] = useAuth();
  const [user, setUser] = useState();
  const getUserData = async (id) => {
    try {
      const data = await axios.get(
        `https://music-api-2rhl.onrender.com/api/v1/auth/usersingle/${id}`
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
  useEffect(() => {
    getUserData(auth.user._id);
  }, [auth.user._id]);
  return user;
};

export default GetUserData;
