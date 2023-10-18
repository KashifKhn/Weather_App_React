import React, { useEffect, useState } from 'react'
import {getCurrentDate, getCurrentTime} from '../utils/helper'

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

  return (
    <section className={props.darkMode ? 'time-container dark-mode' : 'time-container'}>
      <h2 className="location">{props.currentWeatherData.name} {props.currentWeatherData.sys.country}</h2>
      <h2 className='time'>{currentTime}</h2>
      <p className='date'>{getCurrentDate()}</p>
    </section>
  )
}

export default TimeDate
