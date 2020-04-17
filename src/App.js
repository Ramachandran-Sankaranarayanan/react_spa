import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

import Rider from "./components/rider/Rider";
import RiderList from "./components/rider/riderlist";
import Signin from "./components/rider/signin";
import Signup from "./components/rider/signup";
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation/>
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
