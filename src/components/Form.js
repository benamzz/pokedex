import React, { useState } from 'react';
import axios from 'axios';

function SearchForm() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const API_KEY = "52f4035eab37766d598b69ecead3c83d";

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching weather data.');
            setWeatherData(null);
        }
    };

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (city !== '') {
            fetchWeatherData();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            {weatherData && (
                <div>
                    <h2>Weather Information for {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default SearchForm;
