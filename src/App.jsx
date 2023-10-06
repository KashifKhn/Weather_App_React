import React, { useState } from 'react'
import Header from './components/Header'
import TimeDate from './components/TimeDate';

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
        <TimeDate
          darkMode={darkMode}
        />
      </div>
    </div>
  )
}

export default App
