import React, {Component} from 'react';
import {View} from 'react-native';

import {WebView} from 'react-native-webview';
import NavigationHeader from '../components/NavigationHeader';

import automationIDs from '../utils/automationIDs';

class WebViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavigationHeader title="WebView" navigation={this.props.navigation} />
        <View flex={1}>
          <WebView
            {...automationIDs('webView')}
            source={{html: '<h1 id="welcome-message">Hello world</h1>'}}
          />
        </View>
      </>
    );
  }
}

export default WebViewScreen;
