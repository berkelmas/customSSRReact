import "@babel/polyfill";
import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
import path from "path";
import { matchRoutes } from "react-router-config";
import { ChunkExtractor } from "@loadable/server";

import { routes } from "../client/app/routes";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../client/app/store/reducers/index";

const app = express();
app.use("/build", express.static(path.join(__dirname, "../../build")));

const nodeStats = path.resolve(
  __dirname,
  "../../build/node/loadable-stats.json"
);

const webStats = path.resolve(
  __dirname,
  "../../build/client/loadable-stats.json"
);

app.get("*", (req, res) => {
  // REDUX STORE
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const routesMatched = matchRoutes(routes, req.path);
  const promises = routesMatched.map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
    const { default: App } = nodeExtractor.requireEntrypoint();

    const webExtractor = new ChunkExtractor({ statsFile: webStats });
    const jsx = webExtractor.collectChunks(
      <App location={req.path} store={store} />
    );
    const html = ReactDOMServer.renderToString(jsx);

    res.set("content-type", "text/html");
    res.send(`
        <!DOCTYPE html>
        <html lang="tr">
          <head>
          ${webExtractor.getLinkTags()}
          ${webExtractor.getStyleTags()}
          </head>
          <body>
            <div id="main">${html}</div>
            <script>
              window.INITIAL_STATE = ${JSON.stringify(store.getState())}
            </script>
            ${webExtractor.getScriptTags()}
          </body>
        </html>
      `);
  });
});

app.listen(4000, () => console.log("KALKTIM..."));
