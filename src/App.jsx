import WeatherApp from "./WeatherApp"
import "./App.css";
import viedoBg from "./assets/vedio2.mp4"
import React from "react";
function App() {


  return (
    <div className="app-container">
     <video autoPlay muted loop className="background-video">
        <source src={viedoBg} type="video/mp4" /></video>
        <div className="content">
     <WeatherApp/>
     </div>
    </div>
  )
}

export default App
