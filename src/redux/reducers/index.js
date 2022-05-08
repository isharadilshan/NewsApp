import {combineReducers} from 'redux';
import authReducer, {authInitialState} from './auth';

export const rootReducer = combineReducers({auth: authReducer});

export const getInitialState = () => ({
  auth: authInitialState,
});
