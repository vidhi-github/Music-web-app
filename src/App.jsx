import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Messages from "./pages/Messages";
import Music from "./pages/Music";
import Notification from "./pages/Notification";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Loging from "./authContext/Loging";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/music" element={<Music />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:pr" element={<Profile />} />
          //user data
          <Route path="/authentication/user" element={<Loging />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
