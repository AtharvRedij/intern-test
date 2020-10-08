import { combineReducers } from "redux";
import { questionsList } from "./questions";
import { modal } from "./modal";

export default combineReducers({
  questionsList,
  modal,
});
