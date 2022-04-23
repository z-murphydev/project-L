import express from "express";
import { getProxyServerPort } from "../shared";

(async () => {
  const app = express();
  const port = getProxyServerPort();

  app.listen(port, () => {
    console.log(`Proxy Server available at port: ${port}`);
  });
})();
