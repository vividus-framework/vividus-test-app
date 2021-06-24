import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import {welcomeImage} from '../assets/index';
import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import {Image, Button, Text} from 'react-native-elements';
import {launchImageLibrary} from 'react-native-image-picker';

class ImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: welcomeImage,
    };
  }

  handleSelectImage() {
    const options = {
      title: 'Select image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image library Error: ', response.errorMessage);
      } else {
        const image = response.assets[0];
        this.setState({
          image: {
            uri: image.uri,
          },
          data: {
            height: image.height,
            width: image.width,
          },
        });
      }
    });
  }

  render() {
    const data = this.state.data;
    return (
      <>
        <NavigationHeader title="Image" navigation={this.props.navigation} />
        <View flex={1}>
          <View style={globalStyles.centredView}>
            {data && (
              <Text h2>
                {data.width}x{data.height}
              </Text>
            )}
          </View>
          <View style={styles.imageView}>
            <Image
              PlaceholderContent={<ActivityIndicator />}
              source={this.state.image}
              style={styles.image}
            />
          </View>
          <View style={styles.bottomView}>
            <Button
              title="Select image"
              onPress={() => this.handleSelectImage()}
              buttonStyle={globalStyles.button}
              testID="select-image-testID"
              accessibilityLabel="select-image-accessibilityLabel"
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
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

export default ImageScreen;
