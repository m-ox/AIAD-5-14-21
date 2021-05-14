import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// import navigation container

//import pages
//import New from "./pages/new"
//import LogOut from "./navigation/homepage-buttons"

export default class App extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='app'>

          <div>
            <div className="title-wrapper">
              <h1>Sticky Notes App</h1>
            </div>

          </div>
      </div>
    );
  }
}
