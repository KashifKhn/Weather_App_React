import React, { useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';
import CurrentWeather from './components/CurrentWeather';

const App = () => {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  const handleDarkMode = () => {
    setDarkMode(oldDarkMode => !oldDarkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  console.log(darkMode);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <div className="container app-container">

        <Header
          darkMode={darkMode}
          handleDarkMode={handleDarkMode}
        />
        <main>
          {/* <TimeDate
            darkMode={darkMode}
          /> */}
          <CurrentWeather
            darkMode={darkMode}
          />

        </main>
      </div>
    </div>
  )
}

export default App
