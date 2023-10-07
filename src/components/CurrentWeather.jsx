import React from 'react'
import sunRiseIconDark from '../assets/images/sunrise-icon-dark.png'
import sunSetIconDark from '../assets/images/sunset-icon-dark.png'
import sunIcon from '../assets/images/sun-icon.png'
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

const CurrentWeather = (props) => {
  return (
    <div className={props.darkMode ? 'current-weather-container dark-mode' : 'current-weather-container'}>
      <div className="grid-container">
        <div className="grid-item">
          <div className="temp-deg">
            <h3>24°C </h3>
            <p className="fell-like">Feels like: <span>22°C</span></p>
          </div>
          <div className="sun-time-container">
            <div className="sun-rise">
              <img src={props.darkMode ? sunRiseIconLight : sunRiseIconDark} alt="" />
              <div>
                <p className='sun-time-txt'>Sun Rise</p>
                <p>06:00</p>
              </div>
            </div>
            <div className="sun-set">
              <img src={props.darkMode ? sunSetIconLight : sunSetIconDark} alt="" />
              <div>
                <p className='sun-time-txt'>Sun Set</p>
                <p>06:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item weather-icon">
          <img src={sunIcon} alt="" />
          <h4>Sunny</h4>
        </div>
        <div className="grid-item extra-info">
          <div className="extra-info-div">
            <div className="extra-info-item">
              <img src={props.darkMode ? humidityIconLight : humidityIconDark} alt="" />
              <p className='extra-info-qun'>41%</p>
              <p className='extra-info-name'>Humidity</p>
            </div>
            <div className="extra-info-item">
              <img src={props.darkMode ? windIconLight : windIconDark} alt="" />
              <p className='extra-info-qun'>2km/h</p>
              <p className='extra-info-name'>Wind Speed</p>
            </div>
          </div>
          <div className="extra-info-div">
            <div className="extra-info-item">
              <div className="extra-info-item">
                <img src={props.darkMode ?pressureIconLight : pressureIconDark} alt="" />
                <p className='extra-info-qun'>997hpa</p>
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
