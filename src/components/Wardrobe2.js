import Article from "./Article";
import React, { Component } from "react";

class Wardrobe2 extends Component {
  render() {
    let wardrobe = [
      { type: "shirt", color: "red", size: "Medium" },
      { type: "shirt", color: "blue", size: "Medium" },
      { type: "pants", color: "blue", size: "Medium" },
      { type: "accessory", color: "sapphire", size: "" },
      { type: "accessory", color: "lilac", size: "" },
    ];
    return wardrobe
      .filter((e) => e.color === "blue") //return array
      .map((E) => <Article info={E} key={E.color + E.type} />) //iterat the array to print it
  }
}

export default Wardrobe2;
