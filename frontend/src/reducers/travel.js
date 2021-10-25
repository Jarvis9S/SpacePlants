import { TRAVEL } from "../actions/types";

const DEFAULT_TRAVEL = { travelId: "", expiration: "" }

const travelReducer = (state = DEFAULT_TRAVEL, action) =>{
    switch(action.type) {
        case TRAVEL.FETCH:
            return state;
        case TRAVEL.FETCH_ERROR: 
            return {...state, message: action.message}
        case TRAVEL.FETCH_SUCCESS:
            return {...state, generation: action.generation};
        default:
            return state;
    }
}

export default travelReducer;