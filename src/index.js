import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import mojs from 'mo-js';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new mojs.Shape({
      shape:        'circle',  // shape "circle" is default
      radius:       50,
      fill:         '#A8CABA',  //default is pink
      stroke:       '#5D4157',
      strokeWidth:  3,
      isShowStart:  true,      // show before any animation starts
    });
  }

  render() {
    return (
      <div>Hello Wolrd!</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app"),
);
