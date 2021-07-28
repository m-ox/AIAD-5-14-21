import React, { Component } from 'react'

export default class ButtonOverlay extends Component {
    constructor(props) {
        super(props)
    }

    handleEdit() {
        console.log('edit post')
    }

    handleDelete() {
        console.log('delete post')
    }

    render() {
        return (
            <div className="button-overlay">
                <button onClick={() => this.handleEdit()}>Edit</button>
                <button onClick={() => this.handleDelete()}>Delete</button>
            </div>
        )
    }
}
