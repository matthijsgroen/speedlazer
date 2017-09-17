import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import replayMiddleWare from "./replay/middleware";

import playerReducers from "./players/reducers";
import controlReducers from "./controls/reducers";
import shipReducers from "./ships/reducers";
import gameReducers from "./game/reducers";

const rootReducer = combineReducers({
  players: playerReducers,
  controls: controlReducers,
  ships: shipReducers,
  gameState: gameReducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(replayMiddleWare))
);
export default store;
