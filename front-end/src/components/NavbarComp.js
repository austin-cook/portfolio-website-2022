import React from "react";
import '../App.css'
//import darkLogo from '../images/logo-dark.svg'
import transparentLogo from '../images/logo-transparent.png';
//import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

function NavbarComp() {
    return (
        <div className="navbar gray-background">
            <div className="navbar-left">
                <div className="left-image">
                    <img src={transparentLogo} alt="Austin Cook | Software Engineer"></img>
                </div>
            </div>
            <div className="navbar-right white-text">
                <motion.div className="navbar-link" drag dragConstraints="left: 0, top: 0, right: 0, bottom: 0">
                    <motion.p className="remove-whitespace" whileHover={{ scale: 1.1 }}>Projects</motion.p>
                </motion.div>
                <div className="navbar-link">
                    <p className="remove-whitespace">Skills</p>
                </div>
                <div className="navbar-link">
                    <p className="remove-whitespace">Education</p>
                </div>
                <div className="navbar-link">
                    <p className="remove-whitespace">Contact</p>
                </div>
                <div className="navbar-link">
                    <p className="remove-whitespace">Resume</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarComp;