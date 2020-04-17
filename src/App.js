import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

import Rider from "./Rider";
import RiderList from "./riderlist";
import Signin from "./signin";
import Signup from "./signup";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <h2>Home</h2>
            <ul>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/rider">Rider</Link>
              </li>
              <li>
                <Link to="/riderList">RiderList</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/rider">
                <Rider />
              </Route>
              <Route path="/riderList">
                <RiderList />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
