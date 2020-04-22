import React from "react";
import "../styles.css";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SummaryDetail from "./SummaryDetail";
import { fetchNews } from "../api";
import { Card } from "react-bootstrap";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    setInterval(async () => {
      let news = await fetchNews();
      this.setState({ news });
    }, 5000);
  }

  render() {
    return (
      <div className="nav">
        <a href="/">Home</a>
        <div>
          {this.state.news.map((item) => {
            return (
              <div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
