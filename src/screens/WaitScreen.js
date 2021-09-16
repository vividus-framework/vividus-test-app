import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import {welcomeImage} from '../assets/index';
import {Button, Icon, Input} from 'react-native-elements';

class WaitScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureShown: true,
      controlsDisabled: false,
      timeout: 2000,
    };
    this.inputRef = React.createRef();
  }

  toggleButtonsState() {
    this.setState({
      controlsDisabled: !this.state.controlsDisabled,
    });
  }

  togglePictureVisibility() {
    this.toggleButtonsState();
    setTimeout(() => {
      this.setState({
        pictureShown: !this.state.pictureShown,
      });
      this.toggleButtonsState();
    }, this.state.timeout);
  }

  render() {
    return (
      <>
        <NavigationHeader title="Wait" navigation={this.props.navigation} />
        <View style={styles.view}>
          <View style={styles.imageView}>
            {this.state.pictureShown ? (
              <Image
                style={styles.image}
                source={welcomeImage}
                testID="picture-testID"
                accessibilityLabel="picture-accessibilityLabel"
              />
            ) : null}
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Show"
              buttonStyle={styles.button}
              type="solid"
              disabled={this.state.controlsDisabled || this.state.pictureShown}
              onPress={() => this.togglePictureVisibility()}
              testID="show-picture-testID"
              accessibilityLabel="show-picture-accessibilityLabel"
            />
            <Button
              title="Hide"
              buttonStyle={styles.button}
              type="solid"
              disabled={this.state.controlsDisabled || !this.state.pictureShown}
              onPress={() => this.togglePictureVisibility()}
              testID="hide-picture-testID"
              accessibilityLabel="hide-picture-accessibilityLabel"
            />
          </View>
          <View style={globalStyles.centredView}>
            <Input
              label="Timeout"
              defaultValue={this.state.timeout.toString()}
              leftIcon={<Icon name="timer" iconStyle={globalStyles.icon} />}
              onChangeText={text => {
                if (text.length > 0) {
                  if (isNaN(text)) {
                    this.inputRef.current.shake();
                  } else {
                    this.setState({timeout: Number.parseInt(text, 10)});
                  }
                } else {
                  this.setState({timeout: 0});
                }
              }}
              containerStyle={styles.timerInput}
              ref={this.inputRef}
              disabled={this.state.controlsDisabled}
              testID="timeout-input-testID"
              accessibilityLabel="timeout-input-accessibilityLabel"
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  imageView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: '15%',
    backgroundColor: '#fac241',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'stretch',
  },
  timerInput: {
    width: '75%',
  },
});

export default WaitScreen;
