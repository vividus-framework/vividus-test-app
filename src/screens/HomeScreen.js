import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

import {welcomeImage} from '../assets/index';
import NavigationHeader from '../components/NavigationHeader';

class HomeScreen extends Component {
  render() {
    return (
      <>
        <NavigationHeader title="Home" navigation={this.props.navigation} />
        <SafeAreaView style={styles.view}>
          <Image style={styles.image} source={welcomeImage} />
        </SafeAreaView>
      </>
    );
  }
}

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

export default HomeScreen;
