import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavigationComponent extends Component {
    constructor() {
        super()

        // no need to set a state rn
        this.state = {
            textdisplay: 'block'
        }
        
    }

    hideLink = hideshow => {
        this.setState({
            textdisplay: hideshow
        })
    }




    render() {
        return (
            <div className="home-title-wrapper">
                <h1>Sticky Notes App</h1>

                <NavLink exact to="/">
                    Home
                </NavLink>

                <NavLink style={{display: `${this.state.textdisplay}`}} onClick = 
                {this.state.textdisplay === 'block'
                ? () => this.hideLink('none')
                : () => this.hideLink('block')} 
                to="/new">
                    New Note
                </NavLink>

                <NavLink exact to="/logout">
                    Log Out 
                </NavLink>
            </div>
        )
    }
}