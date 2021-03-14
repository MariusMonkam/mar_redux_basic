import { combineReducers } from "redux";
import countReducer from "./counter";

const allReducers = combineReducers({
  counter: countReducer
});

export default allReducers;
