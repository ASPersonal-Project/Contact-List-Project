import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./components/reducer";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk];

const composeWithEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares)
);

export const configureStore = createStore(reducer, composeWithEnhancer);

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(
//     reducer,composeEnhancers(applyMiddleware(thunk))
// );

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,

  document.querySelector("#root")
);
