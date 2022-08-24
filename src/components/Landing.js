import React, { Component } from 'react';

class Landing extends Component {


    render() {
        return <div>Welcome, {this.props.userName} {this.props.store.filter(obj => obj.hottest )[0].item}</div>
    }
}

export default Landing