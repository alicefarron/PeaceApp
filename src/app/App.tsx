import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}


export default App;
