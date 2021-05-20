import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()

        this.mocky = require('../mockData')
        console.log(this.mocky.mockData[0].content) //id
    }
  
    render() {
        // RIP OFF VIEW PAGE, JUST MAKE IT EMPTY
      return (
          <div>
              {`${this.mocky.mockData[0].title}`}
          </div>
      );
    }
  }