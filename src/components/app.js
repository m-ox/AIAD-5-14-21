import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { NavLink } from "react-router-dom"

// import navigation container
import NavigationContainer from './navigation/user-home-nav'

//import pages
import StickyManager from './pages/sticky-manager';
import New from "./pages/new"
import Sticky from './pages/sticky';
import Home from './pages/home'

export default class App extends Component {

  constructor() {
    super()

  }

  render() {

    // TODO - GET STICKY NOTES FROM SPACE CAMP CAMP SPACE DEV CAMP API
    // CLICK ON STICKY NOTE AND GO TO VIEW PAGE WITH OBJECT ID
    // https://spacecamp.devcamp.space/portfolio/portfolio_blogs
    return (
      <div className='app'>

          <div className="nav-wrapper">

            <Router>
              <NavigationContainer />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/new" component={New} />
                <Route path="/view" component={StickyManager} />
              </Switch>
            </Router>

          </div>
      </div>
    );
  }
}
