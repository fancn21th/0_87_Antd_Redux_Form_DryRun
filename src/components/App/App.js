import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AntdForm from "../AntdForm";
import "./App.css";

function Index() {
  return <h2>This is HOME Page</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div className="demo">
        <nav className="demo-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/antd-form/">Antd Form</Link>
            </li>
            <li>
              <Link to="/redux-form/">Redux Form</Link>
            </li>
          </ul>
        </nav>

        <div className="demo-body">
          <Route path="/" exact component={Index} />
          <Route path="/antd-form/" component={AntdForm} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
