import { AppThunk } from '../store';
import { WeatherData } from '../../models/weather';

import weatherService from '../../services/weatherService';

// action creators
export const getWeather = (location: string): AppThunk => async (dispatch) => {
  const data = await weatherService.getWeather(location);
  dispatch({
    type: 'GET_WEATHER',
    data,
  });
};

// reducer
interface ReducerAction {
  type: string;
  data: WeatherData;
}
const reducer = (state: WeatherData | null = null, action: ReducerAction) => {
  switch (action.type) {
    case 'GET_WEATHER':
      return action.data;
    default:
      return state;
  }
};

export default reducer;
