import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';

import {globalStyles} from '../sheet/index';

import {welcomeImage} from '../assets/index';
import NavigationHeader from '../components/NavigationHeader';

class HomeScreen extends Component {
  render() {
    return (
      <>
        <NavigationHeader title="Home" navigation={this.props.navigation} />
        <SafeAreaView style={globalStyles.centredView}>
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
});

export default HomeScreen;
