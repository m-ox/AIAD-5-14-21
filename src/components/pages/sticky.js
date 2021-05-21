import React, { Component } from 'react'
import axios from 'axios'

export default class Sticky extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stickies: [],
            title: '',
            content: ''
        }
}

    render() {
        // RIP OFF VIEW PAGE, JUST MAKE IT EMPTY
        return (
            <div className="container">
              <div className="view-container">
                <textarea>
                    
                </textarea>
              </div>
            </div>
        );
      }
    }
