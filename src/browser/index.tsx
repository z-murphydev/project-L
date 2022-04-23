import * as React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/app";

let siteMount = document.querySelector(".site");
if (siteMount == null) {
  siteMount = document.createElement("div");
  siteMount.className = "site";
  document.body.appendChild(siteMount);
}
ReactDOM.render(<App />, siteMount);
