import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {globalStyles} from '../sheet/index';
import automationIDs from '../utils/automationIDs';

import NavigationHeader from '../components/NavigationHeader';
import {Input, Icon, Text} from 'react-native-elements';
import Clipboard from '@react-native-community/clipboard';

const defaultName = 'Unknown';

class InputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: defaultName,
    };
  }

  render() {
    return (
      <>
        <NavigationHeader title="Input" navigation={this.props.navigation} />
        <View style={styles.view}>
          <Text h3 {...automationIDs('nameDisplay')}>
            {this.state.name}
          </Text>
          <Input
            label="Your name"
            placeholder="Enter your name..."
            leftIcon={<Icon name="account-box" iconStyle={globalStyles.icon} />}
            onChangeText={text => {
              const name = text.length === 0 ? defaultName : text;
              this.setState({name: name});
            }}
            {...automationIDs('nameInput')}
          />
          <TouchableOpacity
            onPress={() => Clipboard.setString(this.state.name)}
            {...automationIDs('CopyTextToClipboardButton')}
          >
            <Text>Copy text to Clipboard</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default InputScreen;
