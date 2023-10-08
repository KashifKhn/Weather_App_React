import React, { useEffect, useState } from 'react'

const TimeDate = (props) => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const updateDateTime = () => {
        setCurrentDateTime(new Date());
      };
  
      const intervalId = setInterval(updateDateTime, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    function getCurrentTime(timezoneOffset) {
      const currentTime = new Date();
      const timezoneOffsetMs = timezoneOffset * 60000; 
      const adjustedTime = new Date(currentTime.getTime() + timezoneOffsetMs);     
      const hours = adjustedTime.getUTCHours();
      const minutes = adjustedTime.getUTCMinutes();
      
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      return `${formattedHours}:${formattedMinutes}`;
    }
  
    return (
        <div className={props.darkMode ? 'time-container dark-mode' : 'time-container'}>
            <h2 className="location">{props.location.city.toUpperCase()} {props.location.tag.toUpperCase()}</h2>
            <div className="date-time">
                <h2 className='time'>{getCurrentTime(props.currentWeatherData.timezone)}</h2>
                <p className='date'>{}</p>
            </div>
        </div>
    )
}

export default TimeDate
