import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components.js/Header";
import Main from "./components.js/Main";
import Nav from "./components.js/Nav";
import Footer from "./components.js/Footer";
import Home from "./components.js/Home";
import SummaryDetail from "./components.js/SummaryDetail";
import { Link, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          height: "-webkit-fill-available",
          flexDirection: "row",
        }}
      >
        <BrowserRouter>
          <Main />
          <Nav />
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
