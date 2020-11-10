import React, {Component} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import automationIDs from '../utils/automationIDs';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerDate: this.props.date,
    };
  }

  render() {
    return (
      <>
        <DateTimePicker
          value={this.state.pickerDate}
          mode="date"
          display="spinner"
          onChange={(event, newDate) => {
            this.setState({pickerDate: newDate});
            this.props.onChange(event, newDate);
          }}
          {...automationIDs('dateTimePicker')}
        />
      </>
    );
  }
}

export default DatePicker;
