import React from "react";
import "../styles.css";
import { Card } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home";
import SummaryDetail from "./SummaryDetail";

function Main() {
  return (
    <div className="main">
      <nav>
        <BrowserRouter>
          <Route path="/" component={Home} exact />
          <Route path="/summary" component={SummaryDetail} />
        </BrowserRouter>
      </nav>
    </div>
  );
}

export default Main;
