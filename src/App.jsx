import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';
import CurrentWeather from './components/CurrentWeather';
import { fetchCurrentWeather } from './api';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    handleGetCurrentLocation()
  }, []);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

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
    const callAPI = async () => {
      try {
        const data = await fetchCurrentWeather(location)
        setCurrentWeatherData(data)
      }
      catch (error) {
        setError(error)
      }

    }
    callAPI()
  }, [location])

  const HandleOnSearchChange = (searchData) => {
    setLocation(
      {
        lat: searchData.value.split(' ')[0],
        lon: searchData.value.split(' ')[1]
      }
    )
  }
  console.log(currentWeatherData);


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
        </main>
      </div>
    </div>
  )
}

export default App
