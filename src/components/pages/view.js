import React, { Component } from 'react'

export default class App extends Component {

    constructor() {
        super()

        this.mocky = require('../mockData')
        console.log(this.mocky.mockData[0].content) //id
    }
  
    render() {

      // TODO GET SPACECAMP DATA - https://spacecamp.devcamp.space/portfolio/portfolio_blogs
      // load accordingly
      return (
          <div className="container">
            <div className="view-container">
              {`${this.mocky.mockData[0].title} created by ${this.mocky.mockData[0].user}`}
              <textarea rows="15" cols="50">
                {`${this.mocky.mockData[0].content}`}
              </textarea>
            </div>
          </div>
      );
    }
  }
  