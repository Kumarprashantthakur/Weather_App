import WeatherApp from "./WeatherApp"
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer"; 
import imageBg from "./assets/weather.jpg"
import React from "react";

function App() {
  return (
    <div className="app-container">
      <img className="background-img" src={imageBg} alt="background" />
      <Navbar />
      <br />
      <div className="content">
        <WeatherApp />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
