import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    city: '',
    country: '',
  });
  const [formVisible, setFormVisible] = useState(true);

  const { city, country } = location;

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const onChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getWeather = async (e) => {
    e.preventDefault();

    if (city.trim() === '' || country.trim() === '') {
      alert('fill');
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`
      );
      const repsonseData = await response.json();

      setWeather(repsonseData);
      setFormVisible(false);
    }
  };

  const handleGoBack = () => {
    setWeather({});
    setLocation({
      city: '',
      country: '',
    });
    setFormVisible(false);
  };

  return (
    <div className='main-container'>
      <h1>Weather App</h1>

      <section className={formVisible ? '' : 'hidden'}>
        <form onSubmit={getWeather}>
          <div className='form-field'>
            <input
              type='text'
              id='city'
              name='city'
              value={city}
              placeholder=' '
              onChange={onChange}
            />
            <label htmlFor='city'>City</label>
          </div>

          <div className='form-field'>
            <input
              type='text'
              id='country'
              name='country'
              value={country}
              placeholder=' '
              onChange={onChange}
            />
            <label htmlFor='country'>Country</label>
          </div>

          <button type='submit'>Go</button>
        </form>
      </section>

      {/* <section className={formVisible && weather.length ? 'hidden' : 'center'}>
        <div className='weather-location'>
          <h3>
            {weather.name} - {weather.sys.country}
          </h3>

          <div className='smaller'>
            Lat: {weather.coord.lat} | Lon: {weather.coord.lon}
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
      </section> */}
    </div>
  );
}

export default App;
