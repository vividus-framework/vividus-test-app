/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/drawer', () => ({
  createDrawerNavigator: jest.fn().mockReturnValue({
    Navigator: ({children}) => <>{children}</>,
    Screen: ({children}) => <>{children}</>,
  }),
}));

it('renders correctly', () => {
  renderer.create(<App />);
});
