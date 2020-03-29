import "@babel/polyfill";
import express from "express";
import ReactDOMServer from "react-dom/server";
import React from "react";
import path from "path";
import { ChunkExtractor } from "@loadable/server";

import { routes } from "../client/app/App";

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
  const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats });
  const { default: App } = nodeExtractor.requireEntrypoint();

  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const jsx = webExtractor.collectChunks(<App location={req.path} />);
  const html = ReactDOMServer.renderToString(jsx);

  res.set("content-type", "text/html");
  res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="main">${html}</div>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `);
});

app.listen(4000, () => console.log("KALKTIM..."));
