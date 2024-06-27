import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
// <h1 id="title" style="color: red">Welcome React</h1>

/**
  <div class="container">
    <h1 id="title">Heading</h1>
    <p>Some para<p>
  </div>
 */

// const heading = React.createElement(
//   "h1",
//   { id: "title", className: "container" },
//   "Welcome to React"
// );

// Javascript XML =>
// React.createElement(
//   "div",
//   { className: "container" },
//   heading,
//   para
// );

const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);
const heading = React.createElement("h1", { id: "title" }, "Heading");
const para = React.createElement("p", null, "Some para");

const users = ["Aravind", <p>Rajesh</p>];

const container = (
  <>
    <h1>{users}</h1>
    <b>Bold element</b>
  </>
);

root.render(container);

// npx => node package execute
// npx webpack
