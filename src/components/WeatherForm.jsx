import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const WeatherForm = () => {
  const { location, setLocation, setWeather, formVisible, setFormVisible } =
    useContext(WeatherContext);

  const { city, country } = location;

  const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  const getWeather = async (e) => {
    e.preventDefault();

    if (city.trim() === '' || country.trim() === '') {
      alert('fill');
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`
      );
      const responseData = await response.json();

      if (responseData.cod === '404') {
        console.log('404');
      } else {
        setWeather(responseData);
        setFormVisible(false);
      }
    }
  };

  const onChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (formVisible) {
    return (
      <section>
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
    );
  }
};
export default WeatherForm;
