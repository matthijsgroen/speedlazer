import { createStore, combineReducers } from "redux";
import playerReducers from "./players/reducers";

const rootReducer = combineReducers({
  players: playerReducers
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
