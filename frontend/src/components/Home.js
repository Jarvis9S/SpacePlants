import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Travel from "./Travel.js";
import Plant from "./Plant.js";
import { logout } from "../actions/account.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Button onClick={this.props.logout} className="logout-button">Log out</Button>
        <h2>Plants in space!</h2>
        <Travel />
        <Plant />
      </div>
    );
  }
}

export default connect(null, { logout })(Home);
