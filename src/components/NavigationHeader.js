import React, {Component} from 'react';
import {Header, Icon} from 'react-native-elements';

import automationIDs from '../utils/automationIDs';

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
            {...automationIDs('menuToggler')}
          />
        }
        centerComponent={{text: this.props.title, style: {color: '#fff'}}}
        rightComponent={
          <Icon
            name="home"
            color="#fff"
            onPress={() => this.props.navigation.navigate('Home')}
            {...automationIDs('homeNavigator')}
          />
        }
      />
    );
  }
}

export default NavigationHeader;
