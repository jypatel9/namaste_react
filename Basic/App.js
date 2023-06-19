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
    React.createElement("h1", { id: "heading1" }, "Hello World From React!"),
    React.createElement("h1", { id: "heading2" }, "Hello World From Sibling!")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "Hello World Sibling 1 From React!"),
    React.createElement("h1", { id: "heading2" }, "Hello World Sibling 1 From Sibling!")
  ])
]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

console.log(siblingStructure);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(siblingStructure);
