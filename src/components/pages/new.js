import React, { Component } from 'react'

//this.mocky = require('./mockData.js')
//    console.log(this.mocky)

export default class App extends Component {

    constructor() {
        super()

        this.mocky = require('../mockData')
        console.log(this.mocky.mockData[0].content) //id
    }
  
    render() {
      return (
          <div>
              {`${this.mocky.mockData[0].title}`}
          </div>
      );
    }
  }
  