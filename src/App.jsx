import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';
import CurrentWeather from './components/CurrentWeather';
import DaysForecast from './components/DaysForecast';
import { fetchCurrentWeather, fetchForecastWeather } from './api';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    handleGetCurrentLocation()
  }, []);

  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const handleDarkMode = () => {
    setDarkMode(oldDarkMode => !oldDarkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  function handleGetCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocation({ lat, lon })
      })
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const currentData = await fetchCurrentWeather(location)
        setCurrentWeatherData(currentData)

        const forecastData = await fetchForecastWeather(location)
        console.log(forecastData.list)

        const indicesToSelect = [8, 16, 24, 32, 39];
        // i want 
        const filteredForecastData = forecastData.list.filter((item, index) => indicesToSelect.includes(index));
        setForecastWeatherData(filteredForecastData);
        console.log(filteredForecastData);

      }
      catch (error) {
        setError(error)
      }
    }
    getData()

  }, [location])

  error && console.log(error)

  const HandleOnSearchChange = (searchData) => {
    setLocation(
      {
        lat: searchData.value.split(' ')[0],
        lon: searchData.value.split(' ')[1]
      }
    )
  }

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="container app-container">
        <Header
          darkMode={darkMode}
          handleDarkMode={handleDarkMode}
          onSearchChange={HandleOnSearchChange}
          handleGetCurrentLocation={handleGetCurrentLocation}
        />
        <main className='main'>
          {currentWeatherData && <TimeDate
            darkMode={darkMode}
            currentWeatherData={currentWeatherData}
          />}
          {currentWeatherData && <CurrentWeather
            darkMode={darkMode}
            currentWeatherData={currentWeatherData}
          />}
          {forecastWeatherData && <DaysForecast
            darkMode={darkMode}
            forecastWeatherData={forecastWeatherData}
          />}
        </main>
      </div>
      <div style={{ minHeight: "100vh" }}></div>
    </div>
  )
}

export default App
