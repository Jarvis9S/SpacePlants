import React, {Component} from "react";
import { Button } from "react-bootstrap";
import PlantAvatar from "./PlantAvatar.js";

const DEFAULT_PLANT = {
    plantId: "",
    travelId: "",
    nickname: "",
    collectdate: "",
    traits: []
};

class Plant extends Component {
    state = { plant: DEFAULT_PLANT };

    componentDidMount() {
        this.fetchPlant();
    }

    fetchPlant = () => {
        fetch("http://localhost:3000/plant/new")
        .then(response => response.json())      
        .then(json => {
            this.setState({ plant: json.plant })
        })
        .catch (error => console.error("error", error));
    }

    render() {
        return (
        <div>
            <Button onClick={this.fetchPlant}>Harvest a plant</Button>
            <PlantAvatar plant={this.state.plant} />
        </div>
        )
    }
}

export default Plant;