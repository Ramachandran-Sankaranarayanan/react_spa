import React, { Component } from "react";
import { BrowserRouter, Route, Switch,  } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

import Rider from "./components/rider/Rider";
import RiderList from "./components/rider/riderlist";
import Signin from "./components/rider/signin";
import Navigation from './components/Navigation';
import Dashboard from './components/official/dashboard';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navigation/>
          <div style={{padding:"0 3rem"}}>
            
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
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
