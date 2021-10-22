import React, {Component} from "react";

const DEFAULT_TRAVEL = { travelId: "", expiration: ""}
const MINIMUM_DELAY = 3000;

class Travel extends Component {
    // this.state = {}
    state = { travel: DEFAULT_TRAVEL };
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
            console.log(json)
        
            this.setState({ travel: json.travel });
        })
        .catch(error => console.error("error", error))
    };

    fetchNextTravel = () => {
        this.fetchTravel();

        let delay = new Date(this.state.travel.expiration).getTime() - new Date().getTime;

        if (delay < MINIMUM_DELAY) {
            delay = MINIMUM_DELAY;
        };

        this.timer = setTimeout(() => this.fetchNextTravel(), delay);
    }

    render() {
        const { travel } = this.state;

        return (
            <div>
                <h3>Travel {travel.travelId}. Expires on:</h3>
                <h4>{new Date(travel.expiration).toString()}</h4>
                <h1>{Date()}</h1>
            </div>
        )
    }
}

export default Travel;