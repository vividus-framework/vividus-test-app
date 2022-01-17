import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {globalStyles} from '../sheet/index';

import Slider from '@react-native-community/slider';

import automationIDs from '../utils/automationIDs';

const SliderView = props => {
  const [position, setPosition] = useState(props.default);

  return (
    <>
      <View style={globalStyles.centredView}>
        <Text style={{marginBottom: '10%'}}>
          {props.min} to {props.max}
        </Text>
        <Text {...automationIDs(`${props.id}SliderPosition`)}>{position}</Text>
        <Slider
          style={{width: '80%', height: 60}}
          minimumValue={props.min}
          maximumValue={props.max}
          step={1}
          value={props.default}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange={number => setPosition(number)}
          {...automationIDs(`${props.id}Slider`)}
        />
      </View>
    </>
  );
};

export default SliderView;
