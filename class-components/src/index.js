import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// functional components
// class components

// component = state + UI(html + css) + props

// function User1({ name, age }) {
//   return (
//     <div>
//       <p>
//         Name: {name}, age: {age}
//       </p>
//     </div>
//   );
// }

// class User2 extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//     // console.log(props);
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <p>Name: Aravind, age: 23</p>
//       </div>
//     );
//   }
// }
// h1, b, p, pre => user1 is not a valid html element

function remount() {
  root.render(<Counter />);
}

function unmount() {
  root.render(
    <div>
      <h1>Component unmounted</h1>
      <button onClick={remount}>Re mount component</button>
    </div>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 12 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count is : {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={unmount}>Unmout component</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    console.log(this.props, this.state);
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component is about to unmount");
  }
}

// Component life cycle phases and methods.
// Phases: 1. Mouting 2. Updating 3. Unmounting

root.render(<Counter />);
