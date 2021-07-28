import React, { Component } from 'react'
import axios from 'axios'

import Sticky from './sticky'

export default class App extends Component {

    constructor() {
        super()
   
    this.handlePost = this.handlePost.bind(this)
    
    }

    handlePost(event) {
        axios({
            method: post,
            url: `https://spacecamp.devcamp.space/portfolio/portfolio_blogs\{id}`,
            data: null
        })
    }
  
    render() {
        return (
            <div className="new-form">
                <Sticky />
            </div>
        );
      }
}
