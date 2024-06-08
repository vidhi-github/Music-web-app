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
import More from "./pages/More";

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
          <Route path="/more" element={<More />} />
          //user data
          <Route path="/authentication/user" element={<Loging />} />
        </Routes>
      </div>
      <br/>
      <div>
        <h4>Creating a music web app using the MERN stack (MongoDB, Express, React, Node.js) involves several critical components and considerations:</h4>
        <ul>
          <li><b>User Authentication:</b> Implement secure authentication (e.g., JWT) for user login and registration.</li>
          <li><b>Database Management:</b> Use MongoDB for storing user data, playlists, and song metadata efficiently.</li>
          <li><b>RESTful API:</b> Develop a scalable API with Express and Node.js to handle data interactions and business logic.</li>
          <li><b>Responsive Design:</b> Ensure the app is mobile-friendly with responsive design principles, etc.</li>
        </ul>
      </div>
    </>
  );
}

export default App;
