import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
    constructor() {
        super()

        // no need to set a state rn
    }

    render() {
        return (
            <div className="home-title-wrapper">

                <NavLink exact to="/">
                    Back
                </NavLink>
            </div>
        )
    }
}