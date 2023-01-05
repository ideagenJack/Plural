import { combineReducers } from "redux";
import books from "./bookReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  books,
  apiCallsInProgress,
});

export default rootReducer;
