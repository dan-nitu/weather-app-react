import { useState } from 'react';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    city: 'Pitesti',
    country: 'Romania',
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

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${apiKey}`
    );
    const repsonseData = await response.json();

    setWeather(repsonseData);
  };

  return (
    <div className='main-container'>
      <h1 className='center'>Weather App</h1>

      <section>
        <form onSubmit={getWeather}>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='City'
            value={city}
            onChange={onChange}
          />
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Country'
            value={country}
            onChange={onChange}
          />
          <button type='submit'>Go</button>
        </form>
      </section>
    </div>
  );
}

export default App;
