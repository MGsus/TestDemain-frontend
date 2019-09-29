import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Test Login Home</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/protected" className="nav-link">Protected</Link>
                        </li>
                    </ul>
                    <div className="navbar-text">
                        <Link to="/logout" className="nav-link">Sign Out</Link>
                    </div>
                </div>
            </nav>
        )
    }
}