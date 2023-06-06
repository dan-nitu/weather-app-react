import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const WeatherResult = () => {
  const { weather, formVisible, setFormVisible, setWeather, setLocation } =
    useContext(WeatherContext);

  const handleGoBack = () => {
    setFormVisible(true);
    setWeather({});
    setLocation({ city: '', country: '' });
  };

  if (!formVisible) {
    return (
      <section>
        <div className='weather-location'>
          <h3>
            {weather.name} - {weather.sys.country}
          </h3>
          <div className='smaller'>
            Lat: {weather.coord.lat.toFixed(2)} | Lon:{' '}
            {weather.coord.lon.toFixed(2)}
          </div>
        </div>
        <div className='weather-main'>
          <div>
            <b>{weather.weather[0].main}</b>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt=''
            />
          </div>
          {weather.weather[0].description}
        </div>
        <div className='weather-temperature'>
          <div>
            <b>Temperature: {weather.main.temp}F</b>
          </div>
          <div>Feels like: {weather.main.feels_like}F</div>
          <div>
            <div>Min: {weather.main.temp_min}F</div>
            <div>Max: {weather.main.temp_max}F</div>
          </div>
        </div>
        <div className='weather-wind'>
          <div>Wind</div>
          <div>
            <div>
              {weather.wind.speed} mph at {weather.wind.deg}°
            </div>
          </div>
        </div>
        <div className='weather-extras'>
          <div>Humidity: {weather.main.humidity} g/kg</div>
          <div>Pressure: {weather.main.pressure} hPa</div>
        </div>
        <button onClick={handleGoBack}>Go back</button>
      </section>
    );
  }
};
export default WeatherResult;
