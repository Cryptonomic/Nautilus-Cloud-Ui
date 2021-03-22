import { combineReducers } from 'redux';
import { token, userInfo, payment } from './app/reducers';
import { IAppState } from '../models'
export type RootState = IAppState
export const rootReducer = combineReducers({
  token,
  user: userInfo,
  payment,
});
