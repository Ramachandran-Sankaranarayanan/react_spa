import React, { Component } from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export class Calendar extends Component {
  state = {
    selectedDate: new Date("2014-08-18T21:11:54"),
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  };
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Select a Date"
          value={this.state.selectedDate}
          onChange={this.handleDateChange.bind(this)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
}

export default Calendar;
