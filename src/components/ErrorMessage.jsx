import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

const ErrorMessage = () => {
  const { errorMessage } = useContext(WeatherContext);

  return <div className='error-message'>{errorMessage}</div>;
};
export default ErrorMessage;
