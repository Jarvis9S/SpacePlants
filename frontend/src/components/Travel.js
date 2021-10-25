import React, {Component} from "react";
import { connect } from "react-redux";
import { fetchTravel } from "../actions/travel";
import fetchStates from "../reducers/fetchStates";

const MINIMUM_DELAY = 3000;

class Travel extends Component {
    timer = null;

    componentDidMount() {
        this.fetchNextTravel();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchNextTravel = () => {
        this.props.fetchTravel();

        let delay = new Date(this.props.travel.expiration).getTime() - new Date().getTime;

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

       this.timer = setTimeout(() => this.fetchNextTravel(), delay);
    }

    render() {

        const { travel } = this.props;

//        if (travel.status === fetchStates.fetching) {
//            console.log("fetching...")
//        }

        if (travel.status === fetchStates.error) {
            return <div>{ travel.message }</div>
        }

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

const componentConnector = connect(
    mapStateToProps, 
    { fetchTravel }
    );

export default componentConnector(Travel);