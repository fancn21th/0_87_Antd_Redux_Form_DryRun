import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AntdForm from "../AntdForm";
import ReduxForm from "../ReduxForm";
import "./App.css";

function Index() {
  return <h2>This is HOME Page</h2>;
}

const App = ({ store }) => (
  <Provider store={store}>
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
          <Route path="/redux-form/" component={ReduxForm} />
        </div>
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
