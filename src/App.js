/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';
import InputScreen from './screens/InputScreen';
import ImageScreen from './screens/ImageScreen';
import QRCodeScreen from './screens/QRCodeScreen';
import WaitScreen from './screens/WaitScreen';
import DatePickerScreen from './screens/DatePickerScreen';
import ScrollViewScreen from './screens/ScrollViewScreen';
import ShortScrollViewScreen from './screens/ShortScrollViewScreen';
import WebViewScreen from './screens/WebViewScreen';
import CarouselScreen from './screens/CarouselScreen';
import SliderScreen from './screens/SliderScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" component={HomeScreen}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Button" component={ButtonScreen} />
          <Drawer.Screen name="Input" component={InputScreen} />
          <Drawer.Screen name="Image" component={ImageScreen} />
          <Drawer.Screen name="QR Code" component={QRCodeScreen} />
          <Drawer.Screen name="Wait" component={WaitScreen} />
          <Drawer.Screen name="Date Picker" component={DatePickerScreen} />
          <Drawer.Screen name="Scroll View" component={ScrollViewScreen} />
          <Drawer.Screen
            name="Short Scroll View"
            component={ShortScrollViewScreen}
          />
          <Drawer.Screen name="Web View" component={WebViewScreen} />
          <Drawer.Screen name="Carousel" component={CarouselScreen} />
          <Drawer.Screen name="Slider" component={SliderScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
