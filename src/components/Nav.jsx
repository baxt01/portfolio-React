import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav () {
const [menuOpen, setMenuOpen] = useState (false);

    return (
        <nav>
                <Link to="/" className="title"> Home </Link>
                <div className="menu"
                onClick={()=> {
                    setMenuOpen(!menuOpen);
                }}
                >
                    
                <span></span>
                <span></span>
                <span></span>
                </div>
        <ul className={menuOpen ? "open" : ""}>
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