import React from "react";
import loadable from "@loadable/component";
import {
  BrowserRouter,
  StaticRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
const HomePage = loadable(() => import("./pages/HomePage"));
const SecondPage = loadable(() => import("./pages/SecondPage"));

export const routes = [
  {
    path: "/homepage",
    component: HomePage
  },
  {
    path: "/secondpage",
    component: SecondPage
  }
];
let App;

if (typeof window !== "undefined") {
  App = () => <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
} else {
  App = props => (
    <StaticRouter context={{}} location={props.location}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
}

export default App;
