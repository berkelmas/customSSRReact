import ReactDOM from "react-dom";
import "core-js";
import React from "react";
import { loadableReady } from "@loadable/component";
import App from "./App";

loadableReady(() => {
  const root = document.getElementById("main");
  ReactDOM.hydrate(<App />, root);
});
