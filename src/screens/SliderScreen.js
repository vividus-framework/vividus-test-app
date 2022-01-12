import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import Slider from '@react-native-community/slider';

import automationIDs from '../utils/automationIDs';

class SliderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderPosition: 0,
    };
  }

  render() {
    return (
      <>
        <NavigationHeader title="Slider" navigation={this.props.navigation} />
        <View flex={1}>
          <View style={globalStyles.centredView}>
            <Text {...automationIDs('sliderPosition')}>
              {this.state.sliderPosition}
            </Text>
            <Slider
              style={{width: '80%', height: 60}}
              minimumValue={0}
              maximumValue={100}
              step={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={number => this.setState({sliderPosition: number})}
              {...automationIDs('slider')}
            />
          </View>
        </View>
      </>
    );
  }
}

export default SliderScreen;
