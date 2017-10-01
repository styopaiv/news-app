import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { pickDates } from '../../AC';

class DateRange extends Component {
  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.props.range);
    this.props.pickDates(range);
  };

  render() {
    const { from, to } = this.props.range;
    return (
      <div className="RangeCalendar">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            You chose dates from
            {' '}
            {moment(from).format('L')}
            {' '}
            to
            {' '}
            {moment(to).format('L')}
            .
            {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
          </p>}
        <DayPicker
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
      </div>
    );
  }
}

export default connect(state => ({
  range: state.filters.dateRange,
}), { pickDates })(DateRange);
