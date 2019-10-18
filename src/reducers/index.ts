import { combineReducers } from 'redux';
import { app } from './app/reducers';

export interface RootState {
  app: any;
}

export const rootReducer = combineReducers({
  app
});
