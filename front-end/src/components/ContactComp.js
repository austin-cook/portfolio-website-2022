import React from "react";
import '../App.css'
import { motion } from "framer-motion";
import emailLogoBlue from '../images/email-blue.png';
import linkedinLogoBlue from '../images/linkedin-blue.png';
import githubLogoBlue from '../images/github-blue.png';

function ContactComp() {
    return (
        <div className="contact-comp">
            <h1 className="intro-title remove-whitespace">Contact <span className="blue-text">Me</span></h1>
            <div className="contact-boxes">
                <div className="contact-box">
                    <div className="contact-image">
                        <a href="mailto:austin.cook.id@gmail.com" target="_blank" rel="noreferrer"><motion.img src={emailLogoBlue} alt="Email" whileHover={{ y: "-.5vw" }} transition={{ duration: .2}}></motion.img></a>  
                    </div>
                    <h3 className="less-margin">Email</h3>
                    <p className="less-margin">austin.cook.id@gmail.com</p>
                </div>
                <div className="contact-box">
                    <div className="contact-image">
                        <a href="https://www.linkedin.com/in/austin-cook-id/" target="_blank" rel="noreferrer"><motion.img src={linkedinLogoBlue} alt="LinkedIn" whileHover={{ y: "-.5vw" }} transition={{ duration: .2}}></motion.img></a>
                    </div>
                    <h3 className="less-margin">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/austin-cook-id/" target="_blank" rel="noreferrer"><p className="less-margin">austin-cook-id</p></a>
                </div>
                <div className="contact-box">
                    <div className="contact-image">
                        <a href="https://github.com/Austin-Cook" target="_blank" rel="noreferrer"><motion.img src={githubLogoBlue} alt="GitHub" whileHover={{ y: "-.5vw" }} transition={{ duration: .2}}></motion.img></a> 
                    </div>
                    <h3 className="less-margin">GitHub</h3>
                    <a href="https://github.com/Austin-Cook" target="_blank" rel="noreferrer"><p className="less-margin">Austin-Cook</p></a>
                </div>
            </div>
        </div>
    )
}

export default ContactComp;