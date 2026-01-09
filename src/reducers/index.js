import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux"; // 有兩個以上的 reducer 時，要用 combineReducers 來合併

const allReducers = combineReducers({
  counterReducer,
  isLoggedReducer,
});
export default allReducers;
