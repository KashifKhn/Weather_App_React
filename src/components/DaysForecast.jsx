import React from 'react'
import { conditionIcon } from '../icon'
import {formateDate} from '../utils/helper'


const DaysForecast = (props) => {

    const DaysForecastItems = props.forecastWeatherData.map((item, index) => {
        const mainTempInC = Math.round(item.main.temp);
        const mainTempInF = Math.round((item.main.temp * 9 / 5) + 32);
        return (
            <div className="day-item" key={index}>
                <img src={conditionIcon(item.weather[0].icon)} alt="icon of condition" />
                <p className='temp'>{props.degUnit? `${mainTempInC}°C` : `${mainTempInF}°F`}</p>
                <p className='date'>{formateDate(item.dt_txt)}</p>
            </div>
        )
    })
    return (
        <section className={props.darkMode ? 'day-forecast-container dark-mode' : 'day-forecast-container'}>
            <h2 className=''>5 Days Forecast</h2>
            <div className='day-forecast'>
                {DaysForecastItems}
            </div>
        </section>
    )
}

export default DaysForecast
