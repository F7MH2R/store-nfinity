import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

function app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/storeinfinity" element={App}></Route>
          <Route path="*" element={Error}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
