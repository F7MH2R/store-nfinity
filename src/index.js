import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
//import App from "./App";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";

ReactDOM.render(
  <HashRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </HashRouter>,
  document.getElementById("root")
);
