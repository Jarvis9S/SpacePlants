import { PLANT } from "./types";
import { BACKEND } from "../config.js";

export const fetchPlant = () => dispatch => {
    dispatch({ type: PLANT.FETCH });

    return fetch(`${BACKEND.ADDRESS}/plant/new`)
        .then(response => response.json())
        .then(json => {
            if(json.type === "error") {
                dispatch({ 
                type: PLANT.FETCH_ERROR, 
                message: json.message 
                });
            } 
            if (json.type === "success") {
            }
            else {
                dispatch({ 
                    type: PLANT.FETCH_SUCCESS, 
                    message: json.message
                });
            }
        })
        .catch(error => dispatch({ 
            type: PLANT.FETCH_ERROR, 
            message: error.message 
        }));   
};