import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import redux from './redux/store';
import Routes from './routes';

const App: () => Node = () => {
  return (
    <Provider store={redux.store}>
      <Routes />
    </Provider>
  );
};

export default App;
