import Article from "./Article";
import React, { Component } from "react";

class Wardrobe extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ];
    //info and keya are keys saved in props
    return wardrobe.map((E) => <Article info={E} key={E.color + E.type} />)
  }
}

export default Wardrobe;
