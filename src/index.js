import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as ROUTER } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

ReactDOM.render(
  <ROUTER>
    <App />
  </ROUTER>,
  document.getElementById("root")
);
