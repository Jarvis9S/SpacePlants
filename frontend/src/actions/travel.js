import { TRAVEL } from "./types.js";
import { BACKEND } from "../config.js";

export const fetchTravel = () => dispatch => {
dispatch({ type: TRAVEL.FETCH });

    return fetch(`${BACKEND.ADDRESS}/travel`)
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
        type: TRAVEL.FETCH_ERROR,
        message: error.message
    }));
}