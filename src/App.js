import React from 'react';
import SearchForm from './components/Form';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <SearchForm />
      <WeatherDisplay />
    </div>
  );
}

export default App;
