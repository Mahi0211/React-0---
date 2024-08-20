// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Hello World 1-!"),
    React.createElement("h2", {}, "Hello World 2-!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello World 1-!"),
    React.createElement("h2", {}, "Hello World 2-!"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
