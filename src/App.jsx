import React, { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem('darkMode'))||false);

  const handleDarkMode = () => {
    setDarkMode(oldDarkMode => !oldDarkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  console.log(darkMode);
  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
    </div>
  )
}

export default App
