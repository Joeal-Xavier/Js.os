import { combineReducers } from "redux";
import activeAppReducer from "./activeAppReducer";
import runningApps from "./processReducer";

export default combineReducers({
  foreGroundApp: activeAppReducer,
  runningProcesses: runningApps,
});
