import { combineReducers } from "redux";
import { instaReducer } from "./Reducer";

export const rootReducer = combineReducers({
  insta: instaReducer,
});
