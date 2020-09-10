import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import NavigationHeader from '../components/NavigationHeader';
import {Input, Icon, Text} from 'react-native-elements';

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
        <SafeAreaView style={styles.view}>
          <Text
            h3
            testID="name-display-testID"
            accessibilityLabel="name-display-accessibilityLabel">
            {this.state.name}
          </Text>
          <Input
            label="Your name"
            placeholder="Enter your name..."
            leftIcon={<Icon name="account-box" color={styles.icon.color} />}
            onChangeText={(text) => {
              const name = text.length === 0 ? defaultName : text;
              this.setState({name: name});
            }}
            testID="name-input-testID"
            accessibilityLabel="name-input-accessibilityLabel"
          />
        </SafeAreaView>
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
  icon: {
    color: '#464547',
  },
});

export default InputScreen;
