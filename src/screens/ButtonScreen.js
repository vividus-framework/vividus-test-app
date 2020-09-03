import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

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
        <SafeAreaView style={styles.view}>
          <Text h3 testID="increment-display">
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
            buttonStyle={styles.incrementButton}
            testID="increment"
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
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#fac241',
    margin: '10%',
  },
});

export default ButtonScreen;
