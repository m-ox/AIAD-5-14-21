import React, { Component } from 'react'
import axios from 'axios'

import Sticky from './sticky'

export default class App extends Component {

    constructor(props) {
        super(props)
   
    }
  
    render() {
        // RIP OFF VIEW PAGE, JUST MAKE IT EMPTY
        return (
            <Sticky />
        );
      }
    }
    