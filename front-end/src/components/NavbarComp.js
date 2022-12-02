import React from "react";
import '../App.css'
//import darkLogo from '../images/logo-dark.svg'
import transparentLogo from '../images/logo-transparent.png';
import { motion } from "framer-motion";
import { Link } from "react-scroll"

function NavbarComp() {
    return (
        <div className="navbar gray-background">
            <div className="navbar-left">
                <div className="left-image">
                    <img src={transparentLogo} alt="Austin Cook | Software Engineer"></img>
                </div>
            </div>
            <div className="navbar-right white-text">
                <motion.div className="navbar-link" drag dragConstraints="left: 0, top: 0, right: 0, bottom: 0" whileHover={{ scale: 1.2, opacity: 0.7 }} transition={{ duration: 0.06 }}>
                    <Link to="projects" className="remove-whitespace" spy={true} smooth={true} duration={500}>Projects</Link>
                </motion.div>
                <motion.div className="navbar-link" whileHover={{ scale: 1.2, opacity: 0.7 }} transition={{ duration: 0.06 }}>
                    <Link to="skills" className="remove-whitespace" spy={true} smooth={true} duration={550}>Skills</Link>
                </motion.div>
                <motion.div className="navbar-link" whileHover={{ scale: 1.2, opacity: 0.7 }} transition={{ duration: 0.06 }}>
                    <Link to="education" className="remove-whitespace" spy={true} smooth={true} duration={800}>Education</Link>
                </motion.div>
                <motion.div className="navbar-link" whileHover={{ scale: 1.2, opacity: 0.7 }} transition={{ duration: 0.06 }}>
                    <Link to="contact" className="remove-whitespace" spy={true} smooth={true} duration={900}>Contact</Link>
                </motion.div>
                <motion.div className="navbar-link" whileHover={{ scale: 1.2, opacity: 0.7 }} transition={{ duration: 0.06 }}>
                    <a className="blue-text" href="https://drive.google.com/file/d/1j0ezM-kpag0VvPi9sp1s9CtfexawdXzT/view?usp=sharing" target="_blank" rel="noreferrer"><p className="remove-whitespace">Resume</p></a>
                </motion.div>
            </div>
        </div>
    )
}

export default NavbarComp;