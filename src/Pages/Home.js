import React from "react";
import "../Styles/Home.css";
import Navbar from "../Components/Navbar";

export const authEndpoint = "https://accounts.spotify.com/authorize";

const Home = () => {

  const {
    REACT_APP_SPOTIFY_CLIENT_ID,
  } = process.env;

  const redirectUri = "http://localhost:3000/songs";
  const scopes = "user-read-private user-read-recently-played";
  const scopeEncode = encodeURIComponent(scopes);

 const handleClick =()=>{
  window.location = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${scopeEncode}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
 }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <h1 id="title">MOODUS</h1>
          <h2>Detect your mood based on your recently played music</h2>
          <button className="btn" id="sbtn" onClick={handleClick}>
            CONNECT WITH SPOTIFY
          </button>
          <p>~Don't have a spotify account? Try Demo.~</p>
          <button className="btn">VIEW THE DEMO</button>
        </div>
      </div>
    </>
  );
};

export default Home;
