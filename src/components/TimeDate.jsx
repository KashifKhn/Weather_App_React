import React from 'react'
import { DateTime } from 'luxon';

const TimeDate = (props) => {

  function convertTimestamp(timestamp, timeZone) {
    const dateTime = DateTime.fromSeconds(timestamp).setZone(timeZone);
    const formattedTime = dateTime.toFormat('HH:mm');
    return formattedTime;
  }
   return (
    <section className={props.darkMode ? 'time-container dark-mode' : 'time-container'}>
      <h2 className="location">{props.currentWeatherData.name} {props.currentWeatherData.sys.country}</h2>
      <div className="date-time">
        <h2 className='time'>{convertTimestamp(props.currentWeatherData.dt,props.currentWeatherData.timezone )}</h2>
        <p className='date'>{ }</p>
      </div>
    </section>
  )
}

export default TimeDate
