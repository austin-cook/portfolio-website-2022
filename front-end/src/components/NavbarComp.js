import React from "react";
import '../App.css'
//import darkLogo from '../images/logo-dark.svg'
import transparentLogo from '../images/logo-transparent.png';
//import { Link } from 'react-router-dom'

function NavbarComp() {
    return (
        <div className="navbar gray-background">
            <div className="navbar-left">
                <img src={transparentLogo}></img>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links white-text">
                    <li className="navbar-link">Projects</li>
                    <li className="navbar-link">Skills</li>
                    <li className="navbar-link">Education</li>
                    <li className="navbar-link">Contact</li>
                    <li className="navbar-link">Resume</li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarComp;