import React, {Component} from "react";
import { connect } from "react-redux";
import { travelActionCreator } from "../actions/travel";

const MINIMUM_DELAY = 3000;

class Travel extends Component {
    timer = null;

    componentDidMount() {
        this.fetchNextTravel();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    
    fetchTravel = () => {
        fetch("http://localhost:3000/travel")
        .then(response => response.json())
        .then (json => {
            this.props.dispatchTravel(json.travel);
        })
        .catch(error => console.error("error", error))
    };

    fetchNextTravel = () => {
        this.fetchTravel();

        let delay = new Date(this.props.travel.expiration).getTime() - new Date().getTime;

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextTravel(), delay);
    }

    render() {

        const { travel } = this.props;

        return (
            <div>
                <h3>Travel {travel.travelId}. Expires on:</h3>
                <h4>{new Date(travel.expiration).toString()}</h4>
                <h1>{Date()}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const travel = state.travel;
    return { travel };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchTravel: (travel) => {
            dispatch(
                travelActionCreator(travel)
            )
        }
    } 
};

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Travel);