import React, { Component } from "react";
import Item from "./Item";

class Home extends Component {
  /*   render() {
        return this.props.store.map(c=><Item price={c.price} item={c.item}/>)
      
    }*/

  render() {
    return this.props.store.map((objItem, index) => {
      return (
        <Item
          key={index}
          item={objItem.item}
          price={objItem.price}
          shouldDiscount={this.props.shouldDiscount}
        />
      );
    });
  }
}

export default Home;
