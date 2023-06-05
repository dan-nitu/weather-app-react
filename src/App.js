import Card from './components/Card';
import TheHeader from './components/TheHeader';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';

import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <Card>
        <TheHeader />

        <WeatherForm />
        <WeatherResult />
      </Card>
    </WeatherProvider>
  );
}

export default App;
