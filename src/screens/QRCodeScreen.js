import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import {qrCodeImage} from '../assets/index';

import NavigationHeader from '../components/NavigationHeader';
import {Image} from 'react-native-elements';

class QRCodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: qrCodeImage,
    };
  }

  render() {
    return (
      <>
        <NavigationHeader title="QR Code" navigation={this.props.navigation} />
        <View flex={1}>
          <View style={styles.imageView}>
            <Image
              PlaceholderContent={<ActivityIndicator />}
              source={this.state.image}
              style={styles.image}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: 400,
    resizeMode: 'stretch',
  },
  imageView: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRCodeScreen;
