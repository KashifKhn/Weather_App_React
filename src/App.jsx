import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';
import CurrentWeather from './components/CurrentWeather';
import { fetchCurrentWeather } from './api';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  const [location, setLocation] = useState({lat: 0, lon: 0 });
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const handleDarkMode = () => {
    setDarkMode(oldDarkMode => !oldDarkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const callAPI = async () => {
      const data = await fetchCurrentWeather(location)
      setCurrentWeatherData(data)
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
