import { combineReducers } from "redux";
import userReducer from "./usersReducers";

export default combineReducers({
  usersList: userReducer,
});
