import axios from "axios";
import Cookies from "js-cookie";
import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const token = Cookies.get("token");
    const data = localStorage.getItem("auth");
    if (token && data) {
      const user = JSON.parse(data);
      setAuth({
        ...auth,
        user: user,
        token: token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
