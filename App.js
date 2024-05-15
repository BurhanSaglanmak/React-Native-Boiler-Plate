// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/Login';
import HomeMain from './components/tabbar/TabBar';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './components/reducer/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor="black"
        barStyle='white'
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="HomeMain" component={HomeMain} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;