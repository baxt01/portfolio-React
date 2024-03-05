import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <nav>
                <Link to="/"> Home </Link>
        <ul>
            <li> 
                <Link to="/pages/ProjectGallery">Project Gallery </Link>
            </li>
            <li>
                <Link to="/pages/Project"> Project </Link> 
            </li>
            <li> 
                <Link to="/pages/contact"> contact </Link> 
            </li>
            </ul>
        </nav>

    );
}