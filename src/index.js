import "lazysizes";

import React from "react";
import ReactDOM from "react-dom";

import Img from "./assets/images/flower1.jpg";
import Img2 from "./assets/images/bg-copy-4.png";

const App = () => (
  <div>
    <h1>Hello React!</h1>
    <img data-src={Img} className="lazyload" alt="flower" />
    <div style={{ height: '1000px' }} />
    <img data-src={Img2} className="lazyload" alt="flower" />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById("app"),
);
