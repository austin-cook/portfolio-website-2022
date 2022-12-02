import React from "react";
import '../App.css'
import transparentLogo from '../images/logo-transparent.png';
import emailLogo from '../images/email.png';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.png';
import { motion } from "framer-motion";

function FooterComp() {
    return (
        <div className="footer gray-background">
            <div className="footer-left">
                <div className="footer-logo">
                    <img src={transparentLogo} alt="Austin Cook | Software Engineer"></img>
                </div>
            </div>
            <div className="footer-right white-text">
                {/* <li className="footer-link">Github</li>
                <li className="footer-link">LinkedIn</li>
                <li className="footer-link">Email</li> */}
                <motion.div className="social-image">
                    <a href="https://github.com/Austin-Cook" target="_blank" rel="noreferrer"><motion.img src={githubLogo} alt="Github" whileHover={{ scale: 1.1, }}></motion.img></a>
                </motion.div>
                <div className="social-image">
                    <a href="https://www.linkedin.com/in/austin-cook-id/" target="_blank" rel="noreferrer"><motion.img src={linkedinLogo} alt="Linkedin" whileHover={{ scale: 1.1 }}></motion.img></a>
                </div>
                <div className="social-image">
                    <a href="mailto:austin.cook.id@gmail.com" target="_blank" rel="noreferrer"><motion.img src={emailLogo} alt="Email" whileHover={{ scale: 1.1 }}></motion.img></a>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;