import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import App from "./components/App";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>,
  document.querySelector("#root")
);
