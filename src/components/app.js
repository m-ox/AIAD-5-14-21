import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import navigation container
import NavigationContainer from './navigation/user-home-nav'

//import pages
import New from "./pages/new"
import LogOut from "./pages/logout"

export default class App extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>

          <div>

            <Router>
              <NavigationContainer />

              <Switch>
                <Route path="/new" component={New} />
                <Route exact path="/logout" component={LogOut} />
              </Switch>
            </Router>

          </div>
      </div>
    );
  }
}
