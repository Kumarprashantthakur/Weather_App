import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "863563db1fd7e15d31ccef7197fa9daa";

    let getWeatherInfo = async () => {
        try {
            setError(null); 
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let locationData = await response.json();

            if (!locationData || locationData.length === 0) {
                setError("City not found!");
                return null;
            }

            let { lat, lon } = locationData[0];

            let weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            let weatherData = await weatherResponse.json();

            let result = {
                city: weatherData.name,
                temp: weatherData.main.temp,
                tempMin: weatherData.main.temp_min,
                tempMax: weatherData.main.temp_max,
                humidity: weatherData.main.humidity,
                feelsLike: weatherData.main.feels_like,
                weather: weatherData.weather[0].description,
            };

            return result;
        } catch (error) {
            setError("Error fetching weather data");
            console.error(error);
            return null;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
        setLoading(false);
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField className='TextField'
                    id="city"
                    label=" Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button
                    variant="outlined"
                    color='sucess'
                    type='submit'
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Search"}

                </Button>
                <br /><br />
                {error && <Alert variant="filled"  severity="error">{error}</Alert>}
            </form>
        </div>
    );
}
