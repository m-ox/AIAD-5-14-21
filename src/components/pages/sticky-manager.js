import React, { Component } from 'react'
import axios from 'axios'

import View from './view'

export default class StickyManager extends Component {
    constructor() {
        super()

        this.state = {
            stickies: []
        }
    }

    getStickies() {
        axios.get("https://spacecamp.devcamp.space/portfolio/portfolio_blogs", {withCredentials: true})
            .then(response => {
                this.setState({
                    stickies: [...response.data.portfolio_blogs]
                })
                console.log('Successful sticky response:', this.state.stickies)
            })
            .catch(error => {
                console.log("sticky note retrieval api error", error)
            })
    }

    componentDidMount() {
        this.getStickies()
    }

    render() {
        return (
            <div>
                    <View
                        data={this.state.stickies}
                    />
            </div>
        )
    }
}