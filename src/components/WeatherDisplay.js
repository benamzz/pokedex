import React from 'react';

function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return null;
  }

  const { temp, humidity } = weatherData.main;

  return (
    <div>
      <h2>Weather Information</h2>
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
