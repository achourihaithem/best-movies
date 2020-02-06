import React from "react";
import "./App.css";
import { Router, Switch, Link } from "react-router-dom";
import history from "./services/history";
import Login from "./components/login/login";
import Register from "./components/register/register";
import CompanyLayoutRoute from "./layouts/mainLayout/company";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <p>hello world</p>

        <img
          style={{ height: "50px", width: "160px" }}
          src="imgs/logo1.png"
          alt=""
        ></img>
        <div>
          <ul>
            <li>
              <Link to="/register">register</Link>
            </li>
            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <CompanyLayoutRoute path="/register" component={Register} />
          <CompanyLayoutRoute path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
