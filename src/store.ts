import { Store, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { RootState, rootReducer } from './reducers';
import { Actions } from './reducers/app/types';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store: Store<RootState, Actions> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);
