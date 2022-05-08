import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {getInitialState, rootReducer} from '../reducers';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(thunk, logger),
  );
  return {store};
};

export default configureStore();
