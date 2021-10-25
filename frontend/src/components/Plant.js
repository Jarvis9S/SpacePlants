import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchPlant } from "../actions/plant.js"
import { Button } from "react-bootstrap";
import PlantAvatar from "./PlantAvatar.js";
import fetchStates from "../reducers/fetchStates.js";

class Plant extends Component {

    render() {

        const { plant } = this.props;

        if (plant.status === fetchStates.error) {
            return <div>{ plant.message }</div>
        }

        return (
        <div>
            <Button onClick={ this.props.fetchPlant }>Harvest a plant</Button>
            <PlantAvatar plant={ this.props.plant} />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    const plant = state.plant;
    return { plant };
};

const componentConnector = connect(
    mapStateToProps, 
    { fetchPlant }
    );

export default componentConnector(Plant);