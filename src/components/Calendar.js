import React, { Component } from 'react';

class Calendar extends Component {
  render() {
    return (
      <div id="calendar">
      {this.props.reservations.map(ob=><div>{ob.name}  has a reservation on{ob.day}@{ob.time}</div>)}
      </div>
    )
  }
}

export default Calendar