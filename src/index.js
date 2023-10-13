import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
//import App from "./App";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import WHO from "./components/who";
import Vista from "./components/Vista";
import Ayuda from "./components/Ayuda";
ReactDOM.render(
  <HashRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/who" element={<WHO />} />
      <Route path="/Vista" element={<Vista />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </HashRouter>,
  document.getElementById("root")
);
