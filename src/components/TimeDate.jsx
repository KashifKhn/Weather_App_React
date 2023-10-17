import React, { useEffect, useState } from 'react'

const TimeDate = (props) => {

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function getCurrentDate() {
    const date = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dayOfWeek = daysOfWeek[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const formattedDate = `${dayOfWeek}, ${day} ${month}`;
    return formattedDate;
  }
  
  return (
    <section className={props.darkMode ? 'time-container dark-mode' : 'time-container'}>
      <h2 className="location">{props.currentWeatherData.name} {props.currentWeatherData.sys.country}</h2>
      <h2 className='time'>{currentTime}</h2>
      <p className='date'>{getCurrentDate()}</p>
    </section>
  )
}

export default TimeDate
