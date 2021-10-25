import { PLANT } from "../actions/types.js";
import fetchStates from "./fetchStates.js";

const DEFAULT_PLANT = {
    travelId: "",
    plantId: "",
    nickname: "",
    collectdate: "",
    traits: []
};

const plantReducer = (state = DEFAULT_PLANT, action) => {
    switch(action.type) {
        case PLANT.FETCH:
            return { ...state, status: fetchStates.fetching }
        case PLANT.FETCH_ERROR:
            return { ...state, status: fetchStates.error, message: action.message }
        case PLANT.FETCH_SUCCESS:
            return { ...state, status: fetchStates.success, ...action.plant };
        default:
            return state;
    }
}

export default plantReducer;