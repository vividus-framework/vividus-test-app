import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements';

class NavigationHeader extends Component {
  render() {
    return (
      <Header
        backgroundColor="#fac241"
        leftComponent={
          <Icon
            name="menu"
            color="#fff"
            onPress={() => this.props.navigation.toggleDrawer()}
            testID="menu-toggler"
            accessibilityLabel="menu-toggler"
          />
        }
        centerComponent={{text: this.props.title, style: {color: '#fff'}}}
        rightComponent={
          <Icon
            name="home"
            color="#fff"
            onPress={() => this.props.navigation.navigate('Home')}
            testID="home-navigator"
            accessibilityLabel="home-navigator"
          />
        }
      />
    );
  }
}

export default NavigationHeader;
