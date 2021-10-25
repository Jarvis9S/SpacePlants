import { TRAVEL } from "./types";

export const fetchTravel = () => dispatch => {
dispatch({ type: TRAVEL.FETCH });

    return fetch("http://localhost:3000/travel")
    .then(response => response.json())
    .then(json => {
        if (json.type === "error") {
            dispatch({ 
            type: TRAVEL.FETCH_ERROR,
            message: json.message
            });
        } else  {
        dispatch({ 
            type: TRAVEL.FETCH_SUCCESS,
            travel: json.travel
        });
      }
    })
    .catch(error => dispatch({
        type: TRAVEL_FETCH_ERROR,
        message: error.message
    }));
}