import { TRAVEL_ACTION_TYPE } from "../actions/types";

const DEFAULT_TRAVEL = { travelId: "", expiration: "" }

export const travelReducer = (state, action) =>{

    if(action.type === TRAVEL_ACTION_TYPE) {
        return { travel: action.travel }
    }
    return { travel: DEFAULT_TRAVEL };
}