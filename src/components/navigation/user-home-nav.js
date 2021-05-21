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

                    
                    <NavLink exact to="/">
                        <h1>Sticky Notes App</h1>
                    </NavLink>

                    <NavLink to="/new"> New Note </NavLink>

                </div>
            
        )
    }
}