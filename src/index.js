import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";

const router = Router([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
