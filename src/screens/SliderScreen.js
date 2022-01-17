import React, {Component, useState} from 'react';
import {View} from 'react-native';

import SliderView from '../components/SliderView';
import NavigationHeader from '../components/NavigationHeader';

class SliderScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavigationHeader title="Slider" navigation={this.props.navigation} />
        <View flex={1}>
          <SliderView id="zeroToHundred" min={0} max={100} />
          <SliderView id="negativeFiftyToFifty" min={-50} max={50} />
          <SliderView id="binary" min={0} max={1} />
        </View>
      </>
    );
  }
}

export default SliderScreen;
