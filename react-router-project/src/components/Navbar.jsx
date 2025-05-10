import React from 'react'
import './Navbar.css'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/" className="nav">Home</NavLink></li>
                <li><NavLink to="/about" className="nav" >About</NavLink></li> 
                <li><NavLink to="/dashboard" className="nav">Dashboard</NavLink></li>  
            </ul>
        </div>
    )
}

export default Navbar