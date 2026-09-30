import {NativeModules} from 'react-native';

require('react-native-gesture-handler/jestSetup');

NativeModules.ImagePickerManager = {
  showImagePicker: jest.fn(),
  launchCamera: jest.fn(),
  launchImageLibrary: jest.fn(),
};

jest.useFakeTimers();
