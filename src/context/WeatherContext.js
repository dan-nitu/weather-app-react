import { useState, createContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    city: '',
    country: '',
  });
  const [formVisible, setFormVisible] = useState(true);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        location,
        setLocation,
        formVisible,
        setFormVisible,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
