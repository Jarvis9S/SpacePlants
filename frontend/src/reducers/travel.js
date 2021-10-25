import { TRAVEL } from "../actions/types";
import fetchStates from "./fetchStates.js";

const DEFAULT_TRAVEL = { travelId: "", expiration: "" }

const travelReducer = (state = DEFAULT_TRAVEL, action) =>{
    switch(action.type) {
        case TRAVEL.FETCH:
            return { ...state, status: fetchStates.fetching } 
        case TRAVEL.FETCH_ERROR: 
            return {...state, status: fetchStates.error }
        case TRAVEL.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.travel };
        default:
            return state;
    }
}

export default travelReducer;