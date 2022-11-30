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
            <div className="navbar-right white-text">
                <div className="navbar-link">
                    <p>Projects</p>
                </div>
                <div className="navbar-link">
                    <p>Skills</p>
                </div>
                <div className="navbar-link">
                    <p>Education</p>
                </div>
                <div className="navbar-link">
                    <p>Contact</p>
                </div>
                <div className="navbar-link">
                    <p>Resume</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp;