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
                <h1>Sticky Notes App</h1>

                <NavLink to="/new">
                    New Note
                </NavLink>

                <NavLink exact to="/logout">
                    Log Out 
                </NavLink>
            </div>
        )
    }
}