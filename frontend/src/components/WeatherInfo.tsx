import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const WeatherInfo: React.FC = () => {
  const data = useSelector((state: RootState) => state.weather);

  if (!data) {
    return <h2>Give me a location mate</h2>;
  } else if (data.error) {
    return <div>{data.error}</div>;
  }
  return (
    <div>
      <h2>
        {data.country}, {data.countryCode}
      </h2>
      <h3>Temperature: {data.temp}</h3>
      <h3>{data.weather}</h3>
      <h3>Wind {data.windSpeed}</h3>
    </div>
  );
};

export default WeatherInfo;
