import React, { Component } from 'react';

class Item extends Component {
    render() {
        return <div>{this.props.item}{this.props.price}</div>

    }
}

export default Item