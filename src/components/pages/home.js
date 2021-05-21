import React, { Component } from 'react'

import StickyManager from './sticky-manager'

export default class Home extends Component {
    render() {
        return (
            <div className="content-wrapper">
                <StickyManager />
            </div>
        )
    }
}
