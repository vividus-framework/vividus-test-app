/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

import {welcomeImage} from './assets/index';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.view}>
        <Image style={styles.image} source={welcomeImage} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
