import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {Text} from 'react-native-elements';

import automationIDs from '../utils/automationIDs';

const TextScrollView = props => {
  return (
    <>
      <ScrollView>
        <Text
          style={{...styles.textMarker, marginTop: '10%'}}
          h3
          {...automationIDs('header')}
        >
          {props.headerText}
        </Text>
        <Text style={styles.mainText} {...automationIDs('body')}>
          {props.bodyText}
        </Text>
        {props.footerText && (
          <Text
            style={{...styles.textMarker, marginBottom: '15%'}}
            h3
            {...automationIDs('footer')}
          >
            {props.footerText}
          </Text>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textMarker: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  mainText: {
    fontSize: 22,
    fontStyle: 'italic',
    letterSpacing: 3,
  },
});

export default TextScrollView;
