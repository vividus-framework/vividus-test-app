/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';
import InputScreen from './screens/InputScreen';
import ImageScreen from './screens/ImageScreen';
import WaitScreen from './screens/WaitScreen';
import DatePickerScreen from './screens/DatePickerScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" component={HomeScreen}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Button" component={ButtonScreen} />
          <Drawer.Screen name="Input" component={InputScreen} />
          <Drawer.Screen name="Image" component={ImageScreen} />
          <Drawer.Screen name="Wait" component={WaitScreen} />
          <Drawer.Screen name="Date Picker" component={DatePickerScreen} />
          <Drawer.Screen name="Scroll View" component={ScrollViewScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
