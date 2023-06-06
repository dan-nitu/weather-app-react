import { useState, createContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    city: '',
    country: '',
  });
  const [formVisible, setFormVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        location,
        setLocation,
        formVisible,
        setFormVisible,
        errorMessage,
        showError,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
