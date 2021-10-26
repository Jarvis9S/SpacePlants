import React, {Component} from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import PlantAvatar from "./PlantAvatar.js";
import { fetchPlant } from "../actions/plant.js";
import fetchStates from "../reducers/fetchStates.js";


class Plant extends Component {

    render() {

        return (
        <div>
            <Button onClick={ this.props.fetchPlant }>Harvest a plant</Button>
            <PlantAvatar plant={ this.props.plant } />
        </div>
        )
    }
}

export default connect(
    ({ plant }) => ({ plant }),
    { fetchPlant }
  )(Plant);