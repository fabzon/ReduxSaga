import React from 'react';
import {
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import store from 'store';
import Routes from './routes';

console.disableYellowBox = true;


const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
