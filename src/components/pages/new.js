import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    constructor() {
        super()

        this.mocky = require('../mockData')
        console.log(this.mocky.mockData[0].content) //id

        this.state = {
            stickies: []
        }
    }

    getStickies() {
        axios.get("https://spacecamp.devcamp.space/portfolio/portfolio_blogs", {withCredentials: true})
            .then(response => {
                console.log("sticky response", response)
            })
            .catch(error => {
                console.log("error", error)
            })
    }

    componentDidMount() {
        this.getStickies()
    }
  
    render() {
        // RIP OFF VIEW PAGE, JUST MAKE IT EMPTY
        return (
            <div className="container">
              <div className="view-container">
                {`${this.mocky.mockData[0].title} created by ${this.mocky.mockData[0].user}`}
                <textarea>
                  
                </textarea>
              </div>
            </div>
        );
      }
    }
    