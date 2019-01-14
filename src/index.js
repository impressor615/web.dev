import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { TweenLite } from "gsap";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    this.tween1 = TweenLite.to(this.div1, 1, { x: 100 });
    this.tween2 = TweenLite.to(this.div2, 1, { x: 100 });
  }

  setRef(name) {
    return (element) => {
      this[name] = element;
    };
  }

  render() {
    return (
      <div>
        <div style={{ height: '100px', width: '100px', backgroundColor: 'red' }} ref={this.setRef('div1')} />
        <div style={{ height: '100px', width: '100px', backgroundColor: 'red' }} ref={this.setRef('div2')} />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById("app"),
);
