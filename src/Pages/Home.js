import React from 'react'
import "../Styles/Home.css"

import Navbar from "../Components/Navbar"
const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="container">
        <div className="content">
        <h1 id="title">MOODUS</h1>
        <h2>What’s the vibe today?</h2>
        <h2>Detect your mood based on your recently played music</h2>
        <button className="btn" id="sbtn">CONNECT WITH SPOTIFY</button>
        <p>~Don't have a spotify account? Try Demo.~</p>
        <button className="btn">VIEW THE DEMO</button>
      </div>
      </div>
      </>
    )
}

export default Home
