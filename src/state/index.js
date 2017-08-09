import { createStore, combineReducers } from "redux";
import playerReducers from "./players/reducers";
import controlReducers from "./controls/reducers";

const rootReducer = combineReducers({
  players: playerReducers,
  controls: controlReducers
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
