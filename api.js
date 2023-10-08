// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key};

const CURRENT_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const FORECAST_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const fetchCurrentWeather = async (query) => {
    const res = await fetch(`${CURRENT_WEATHER_URL}lat=${query.lat}&lon=${query.lon}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();
    return data;
}

export const fetchForecastWeather = async (query) => {
    const res = await fetch(`${FORECAST_WEATHER_URL}lat=${query.lat}&lon=${query.lon}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`);
    const data = await res.json();
    return data;
}

export const fetchCity = async (inputValue) => {
    const res = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions);
    const data = await res.json();
    return data;
}