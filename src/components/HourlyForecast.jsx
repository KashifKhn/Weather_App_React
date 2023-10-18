import React from 'react'
import { conditionIcon } from '../icon'
import windDirection from '../assets/images/wind-navigation.png'

const HourlyForecast = (props) => {

  const hourlyItemElements = props.hourlyWeatherData.map((item) => {
    const mainTempInC = Math.round(item.main.temp);
    const mainTempInF = Math.round((item.main.temp * 9 / 5) + 32);
    return (
      <div key={item.dt_txt} className={props.darkMode ? 'hourly-item dark-mode' : 'hourly-item'}>
        <p className="time">{item.dt_txt.split(' ')[1].slice(0, 5)}</p>
        <img className='temp-icon' src={conditionIcon(item.weather[0].icon)} alt="" />
        <p className="temp">{props.degUnit ? `${mainTempInC}°C` : `${mainTempInF}°F`}</p>
        <img
          className='wind-icon'
          style={{
            transform: `rotate(${item.wind.deg}deg)`,
          }}
          src={windDirection}
          alt=""
        />
        <p className="wind-speed">{`${Math.round(item.wind.speed)} km/h`}</p>
      </div>
    )
  })

  return (
    <section className={props.darkMode ? 'hourly-weather-container dark-mode' : 'hourly-weather-container'}>
      <h2>Hourly Forecast</h2>
      <div className="hourly-items">
        {hourlyItemElements}
      </div>
    </section>
  )
}

export default HourlyForecast
