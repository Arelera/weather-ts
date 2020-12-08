import { createStore, combineReducers, Action, applyMiddleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import weatherReducer from './weather/reducer';

const rootReducer = combineReducers({ weather: weatherReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
