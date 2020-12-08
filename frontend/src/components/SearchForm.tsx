import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/weather/reducer';

const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getWeather(location));
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
        />
      </label>
      <button type="submit">SEARCH</button>
    </form>
  );
};
export default SearchForm;
