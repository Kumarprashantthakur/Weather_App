import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Aligarh",
        feelsLike:28.18,
        temp:29.05,
        tempMin:27.45,
        tempMax:35.45,
        humidity:41,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{color:"pink",fontSize:"2.2rem"}}>Weather App by <span style={{color:"yellow"}}> Prashant Thakur </span></h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}