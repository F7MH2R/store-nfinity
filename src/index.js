import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
