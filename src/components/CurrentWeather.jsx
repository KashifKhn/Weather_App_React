import React from 'react'
import sunRiseIconDark from '../assets/images/sunrise-icon-dark.png'
import sunSetIconDark from '../assets/images/sunset-icon-dark.png'
import windIconDark from '../assets/images/wind-icon-dark.png'
import uvIconDark from '../assets/images/uv-icon-dark.png'
import humidityIconDark from '../assets/images/humidity-icon-dark.png'
import pressureIconDark from '../assets/images/pressure-icon-dark.png'

import sunRiseIconLight from '../assets/images/sunrise-icon-light.png'
import sunSetIconLight from '../assets/images/sunset-icon-light.png'
import windIconLight from '../assets/images/wind-icon-light.png'
import uvIconLight from '../assets/images/uv-icon-light.png'
import humidityIconLight from '../assets/images/humidity-icon-light.png'
import pressureIconLight from '../assets/images/pressure-icon-light.png'

import { conditionIcon } from '../icon'

const CurrentWeather = (props) => {

  const [deg, setDeg] = React.useState(true);
  const { currentWeatherData } = props;

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  }

  const mainTempInC = Math.round(currentWeatherData.main.temp);
  const mainTempInF = Math.round((currentWeatherData.main.temp * 9 / 5) + 32);

  const fellLikeInC = Math.round(currentWeatherData.main.feels_like)
  const fellLikeInF = Math.round((currentWeatherData.main.feels_like * 9 / 5) + 32)

  const handleTempFormate = () => {
    setDeg(oldDeg => !oldDeg)
  }

  return (
    <div className={props.darkMode ? 'current-weather-container dark-mode' : 'current-weather-container'}>
      <div className="grid-container">
        <div className="grid-item">
          <div className="temp-deg">
            <h3 onClick={handleTempFormate}>{deg? `${mainTempInC}°C` : `${mainTempInF}°F`}</h3>
            <p className="fell-like">Feels like: <span>{deg? `${fellLikeInC}°C` : `${fellLikeInF}°F`}</span></p>
          </div>
          <div className="sun-time-container">
            <div className="sun-rise">
              <img src={props.darkMode ? sunRiseIconLight : sunRiseIconDark} alt="" />
              <div>
                <p className='sun-time-txt'>Sun Rise</p>
                <p>{convertTimestamp(currentWeatherData.sys.sunrise)}</p>
              </div>
            </div>
            <div className="sun-set">
              <img src={props.darkMode ? sunSetIconLight : sunSetIconDark} alt="" />
              <div>
                <p className='sun-time-txt'>Sun Set</p>
                <p>{convertTimestamp(currentWeatherData.sys.sunset)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item weather-icon">
          <img src={conditionIcon(currentWeatherData.weather[0].icon)} alt="" />
          <h4>{currentWeatherData.weather[0].main}</h4>
        </div>
        <div className="grid-item extra-info">
          <div className="extra-info-div">
            <div className="extra-info-item">
              <img src={props.darkMode ? humidityIconLight : humidityIconDark} alt="" />
              <p className='extra-info-qun'>{currentWeatherData.main.humidity}%</p>
              <p className='extra-info-name'>Humidity</p>
            </div>
            <div className="extra-info-item">
              <img src={props.darkMode ? windIconLight : windIconDark} alt="" />
              <p className='extra-info-qun'>{currentWeatherData.wind.speed}km/h</p>
              <p className='extra-info-name'>Wind Speed</p>
            </div>
          </div>
          <div className="extra-info-div">
            <div className="extra-info-item">
              <div className="extra-info-item">
                <img src={props.darkMode ? pressureIconLight : pressureIconDark} alt="" />
                <p className='extra-info-qun'>{currentWeatherData.main.pressure}hpa</p>
                <p className='extra-info-name'>Pressure</p>
              </div>
            </div>
            <div className="extra-info-item">
              <div className="extra-info-item">
                <img src={props.darkMode ? uvIconLight : uvIconDark} alt="" />
                <p className='extra-info-qun'>8</p>
                <p className='extra-info-name'>UV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
