import { TRAVEL_ACTION_TYPE } from "./types";

export const travelActionCreator = (payload) =>{
    return {
        type: TRAVEL_ACTION_TYPE,
        travel: payload
    };
}
