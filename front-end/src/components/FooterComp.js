import React from "react";
import '../App.css'
import transparentLogo from '../images/logo-transparent.png';
import emailLogo from '../images/email.png';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github.png';

function FooterComp() {
    return (
        <div className="footer gray-background">
            <div className="footer-left">
                <img src={transparentLogo}></img>
            </div>
            <div className="footer-right white-text">
                {/* <li className="footer-link">Github</li>
                <li className="footer-link">LinkedIn</li>
                <li className="footer-link">Email</li> */}
                <div className="social-image">
                    <a href="https://github.com/Austin-Cook" target="_blank"><img src={githubLogo}></img></a>
                </div>
                <div className="social-image">
                    <a href="https://www.linkedin.com/in/austin-cook-id/" target="_blank"><img src={linkedinLogo}></img></a>
                </div>
                <div className="social-image">
                    <a href="mailto:austin.cook.id@gmail.com" target="_blank"><img src={emailLogo}></img></a>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;