import express from "express";
import { getProxyServerPort } from "../shared";
import { serveStaticAssets } from "./assets";

(async () => {
  const app = express();
  const port = getProxyServerPort();

  app.use(serveStaticAssets());

  app.listen(port, () => {
    console.log(`Proxy Server available at port: ${port}`);
  });
})();
