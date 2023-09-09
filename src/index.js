import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
