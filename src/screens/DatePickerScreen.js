import React, {Component} from 'react';
import {View} from 'react-native';

import {globalStyles} from '../sheet/index';

import NavigationHeader from '../components/NavigationHeader';
import DatePicker from '../components/DatePicker';
import {Input, Icon} from 'react-native-elements';

import automationIDs from '../utils/automationIDs';

const defaultDate = new Date(2011, 11, 11);

class DatePickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultDate.toLocaleString(),
    };
  }

  render() {
    return (
      <>
        <NavigationHeader
          title="Date Picker"
          navigation={this.props.navigation}
        />
        <View>
          <Input
            label="Date"
            leftIcon={<Icon name="av-timer" iconStyle={globalStyles.icon} />}
            editable={false}
            value={this.state.value}
            {...automationIDs('dateInput')}
          />
          <DatePicker
            date={defaultDate}
            onChange={(event, newDate) => {
              this.setState({value: newDate.toLocaleString()});
            }}
          />
        </View>
      </>
    );
  }
}

export default DatePickerScreen;
