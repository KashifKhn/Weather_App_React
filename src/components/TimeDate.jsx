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
  
    const formattedDate = currentDateTime.toLocaleDateString(undefined, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });
  
    const formattedTime = currentDateTime.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  
    return (
        <div className={props.darkMode ? 'time-container dark-mode' : 'time-container'}>
            <h2 className="location">Swat Kpk</h2>
            <div className="date-time">
                <h2 className='time'>{formattedTime}</h2>
                <p className='date'>{formattedDate}</p>
            </div>
        </div>
    )
}

export default TimeDate
