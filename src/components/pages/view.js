import React, { Component } from 'react'
import axios from 'axios'

export default class View extends Component {

    constructor() {
        super()

        this.state = {
          noteItems: []
        };
        
        this.getNoteItems = this.getNoteItems.bind(this)
    }

    getNoteItems(){
      axios.get('https://spacecamp.devcamp.space/portfolio/portfolio_blogs',
      { withCredentials: true 
      })
      .then(response => {
        console.log("res", response);
        this.setState({
          noteItems: this.response.data.portfolio_blogs
        });
      })
      .catch(error => {
        console.log('getNoteItems error', error);
      });
    }

    componentDidMount(){  //if not, then DidMount
      console.log('This comp did mount');
      this.getNoteItems();
    }
  
    render() {

      // TODO GET SPACECAMP DATA - https://spacecamp.devcamp.space/portfolio/portfolio_blogs
      // load accordingly

      //store the note records

      const noteRecords = this.state.noteItems.map(noteItem => {
        return <h1>{noteItem.title}</h1>
      });

      return (
        <div className="container">
          {noteRecords}
          {/* <div className="view-container"> */}
          {/* <textarea  
               rows="15" 
               cols="50"
               readOnly value={noteRecords}> */}

          {/* </textarea> */}
          {/* </div> */}
        </div>
      );
    }
  }
  