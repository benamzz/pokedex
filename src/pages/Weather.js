import React from 'react';
import SearchForm from '../components/weatheComponents/Form';
import WeatherDisplay from '../components/weatheComponents/WeatherDisplay';

const Weather = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <SearchForm />
            <WeatherDisplay />
        </div>
    );
}

export default Weather;
