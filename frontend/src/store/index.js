import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { metamaskReducer } from "./metamask/metamaskReducer";
import { appReducer } from "./application/applicationReducer";

const rootReducer = combineReducers({
  app: appReducer,
  metamask: metamaskReducer,
});

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, composedEnhancer);

export { store };
