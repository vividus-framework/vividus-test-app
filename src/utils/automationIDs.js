import {Platform} from 'react-native';

const automationIDs = Platform.select({
  android: (automationId) => ({
    accessible: true,
    accessibilityLabel: automationId,
  }),
  ios: (automationId) => ({testID: automationId}),
});

export default automationIDs;
