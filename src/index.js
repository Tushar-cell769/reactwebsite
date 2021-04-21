import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataLayer } from "./context/DataLayer";
import { initialState, Reducer } from "./context/Reducer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={Reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
