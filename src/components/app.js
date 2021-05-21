import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import navigation container
import NavigationContainer from './navigation/user-home-nav'

//import pages
import StickyManager from './pages/sticky-manager';
import View from "./pages/view"

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

          <div>

            <Router>
              <NavigationContainer />

              <Switch>
                <Route path="/new" component={StickyManager} />
                <Route path="/view" component={View} />
              </Switch>
            </Router>

          </div>
      </div>
    );
  }
}
