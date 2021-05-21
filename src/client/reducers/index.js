import { combineReducers } from "redux";
import memesReducer from "./memesReducer";

export default combineReducers({
  memes: memesReducer,
});
