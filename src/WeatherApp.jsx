import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Aligarh",
        feelsLike:24.18,
        temp:25.05,
        tempMin:25.45,
        tempMax:25.45,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"red",fontSize:"2.2rem"}}>Weather App by <span style={{color:"black"}}> Prashant Thakur </span></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}