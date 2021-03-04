import React from "react";
import { render } from "react-dom";

const MyFirstComponent = function () {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "My first component")
  );
};
render(React.createElement(MyFirstComponent), document.getElementById("app"));
