import React, { Component } from 'react'
import axios from 'axios'

export default class View extends Component {

    constructor() {
        super()

        this.state = {
          noteItems: []
        }
        
        this.getNoteItems = this.getNoteItems.bind(this)
    }

    getNoteItems(){
      axios.get('https://spacecamp.devcamp.space/portfolio/portfolio_blogs',
      { withCredentials: true 
      })
      .then(response => {
        console.log('response', response)
      })
      .catch(error => {
        console.log('getNoteItems error', error)
      })
    }

    UNSAFE_componentWillMount(){  //if not, either DidMount or unsafe_didmount
      console.log('This comp will mount');
      this.getNoteItems();
    }
  
    render() {

      // TODO GET SPACECAMP DATA - https://spacecamp.devcamp.space/portfolio/portfolio_blogs
      // load accordingly
      return (
          <div className="container">
            <div className="view-container">
              {/* Title */}
              <textarea rows="15" cols="50">
                {/* content */}
              </textarea>
            </div>
          </div>
      );
    }
  }
  