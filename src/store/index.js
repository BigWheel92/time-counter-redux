import { createStore } from "redux";
import reducer from "../reducers"

const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  activeSession: "DAYS"
};


const store=createStore(reducer, initialState);

export default store;