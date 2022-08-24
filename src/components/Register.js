import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (<div id="register">
    {this.props.reservations.map(ob=><div>{ob.day}@{ob.time}</div>)}
    </div>)
  }
}

export default Register