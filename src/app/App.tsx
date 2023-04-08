import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Routes from './Routes';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 200});
  }, []);

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
