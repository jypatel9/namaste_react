import React from "react"
import ReactDOM  from "react-dom/client";

const treeOfParent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello World From React!")
  )
);

const siblingStructure = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Namaste React 🚀!"),
    React.createElement("h1", { id: "heading2" }, "By Jay Desai")
  ])
]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

// console.log(siblingStructure);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(siblingStructure);
