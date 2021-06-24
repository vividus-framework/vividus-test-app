import React, {Component} from 'react';
import {View} from 'react-native';

import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import {Text, Button, Icon} from 'react-native-elements';

class ButtonScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <>
        <NavigationHeader title="Button" navigation={this.props.navigation} />
        <View style={globalStyles.centredView}>
          <Text
            h3
            testID="increment-display-testID"
            accessibilityLabel="increment-display-accessibilityLabel">
            Count: {this.state.number}
          </Text>
          <Button
            title="Increment"
            onPress={() => {
              this.setState({
                number: this.state.number + 1,
              });
            }}
            icon={<Icon name="add" color="#fff" />}
            buttonStyle={globalStyles.button}
            testID="increment-testID"
            accessibilityLabel="increment-accessibilityLabel"
          />
        </View>
      </>
    );
  }
}

export default ButtonScreen;
