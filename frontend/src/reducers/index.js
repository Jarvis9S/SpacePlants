import { combineReducers } from "redux";
import travel from "./travel.js";
import plant from "./plant.js";
import account from "./account.js";

export default combineReducers({ account, plant, travel });
