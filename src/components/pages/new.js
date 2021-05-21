import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    constructor() {
        super()

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
                {'{Sticky Title} created by {Sticky User}'}
                <textarea>
                  
                </textarea>
              </div>
            </div>
        );
      }
    }
    