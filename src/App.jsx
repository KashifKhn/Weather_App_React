import React, { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(oldDarkMode => !oldDarkMode);
  };
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
