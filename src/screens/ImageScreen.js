import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ActivityIndicator, View} from 'react-native';

import {welcomeImage} from '../assets/index';
import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import {Image, Button, Text} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

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

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};
        this.setState({
          image: source,
          data: {
            height: response.height,
            width: response.width,
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
        <SafeAreaView flex={1}>
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
        </SafeAreaView>
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
