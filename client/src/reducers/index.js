import { combineReducers } from "redux";
import auth from "./auth";
import tasks from "./tasks";

export const reducers = combineReducers({auth, tasks});