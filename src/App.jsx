import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';
import CurrentWeather from './components/CurrentWeather';
import { fetchCurrentWeather } from '../api';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
  const [location, setLocation] = useState({ city: "Globe", tag: "Uni", lat: 0, lon: 0 });
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
    console.log(searchData)
    setLocation(
      {
        city: searchData.label.split(' ')[0],
        tag: searchData.label.split(' ')[2],
        lat: searchData.value.split(' ')[0],
        lon: searchData.value.split(' ')[1]
      }
    )
  }
  console.log(location)
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
            location={location}
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
