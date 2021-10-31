import React, { Component } from "react";
import Travel from "./Travel.js";
import Plant from "./Plant.js";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Plants in space!</h2>
        <Travel />
        <Plant />
      </div>
    );
  }
}

export default Home;
