import WeatherApp from "./WeatherApp"
import "./App.css";
import Navbar from "./Navbar";
import viedoBg from "./assets/vedio3.mp4"
import React from "react";
function App() {


  return (
    <div className="app-container">
     <video autoPlay muted loop className="background-video">
        <source src={viedoBg} type="video/mp4" /></video>
        <Navbar/>
        <br />
        <div className="content">
     <WeatherApp/>
     </div>
    </div>
  )
}

export default App
