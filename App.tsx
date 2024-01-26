import React from 'react';
import store from './app/redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './app/navigation/TabNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator
          tabBarOptions={{
            showLabel: false,
          }}
        />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
