import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import "./nav.css"

export default function Nav () {
    return (
        <nav>
                <Link to="/" className="title"> Home </Link>
        <ul>
            <li> 
                <NavLink to="/pages/ProjectGallery">Project Gallery </NavLink>
            </li>
            <li> 
                <NavLink to="/pages/contact"> contact </NavLink> 
            </li>
            </ul>
        </nav>

    );
}