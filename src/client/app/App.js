import "@babel/polyfill";
import React from "react";

// REACT ROUTER
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
// REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducers/index";

import { routes } from "./routes";

let App;

if (typeof window !== "undefined") {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  App = () => (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
} else {
  App = props => (
    <Provider store={props.store}>
      <StaticRouter context={{}} location={props.location}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
}

export default App;
