import React, { Component } from 'react'

import ButtonOverlay from './button-overlay'

export default class Sticky extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sticky: [],
            content: ''
        }

        console.log('sticky props', this.state.content)

        this.handleEdit = this.handleEdit.bind(this)
}

    handleEdit (event) {

        this.setState({
            [event.target.content]: event.target.value,
            content: event.target.value
        })
        console.log(this.state.content)
    }

    render() {
        return (
            <div className="container">
              <div className="view-container">
                <textarea
                    onChange={this.handleEdit}>
                    {this.props.content}
                </textarea>
                <ButtonOverlay
                    content={this.state.content}
                />
              </div>
            </div>
        );
      }
    }
