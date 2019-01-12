import React from "react";
import ReactDOM from "react-dom";

import registerSW from "./sw";

ReactDOM.render(
  <div>Hello React!</div>,
  document.getElementById("app"),
);

registerSW();
