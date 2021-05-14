import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import navigation container

//import pages
import New from "./pages/new"
import LogOut from "./pages/homepage"

export default class App extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <div class="title-wrapper">
              <h1>Sticky Notes App</h1>
            </div>

            <NavigationContainer />

            <Switch>
              <Route path="/your-notes" component={New} />
              <Route exact path="/" component={LogOut} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}
