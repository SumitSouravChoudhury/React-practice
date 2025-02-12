import { Component } from "react";

class Example extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>Increment</button>
      </>
    );
  }
}

export default Example;
