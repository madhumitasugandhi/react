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
                <li><NavLink to="/" className={({isActive})=> isActive? "active-Link": "" }>Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li> 
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>  
            </ul>
        </div>
    )
}

export default Navbar