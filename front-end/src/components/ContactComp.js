import React from "react";
import '../App.css'
import { motion } from "framer-motion";
import  { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import emailLogoBlue from '../images/email-blue.png';
import linkedinLogoBlue from '../images/linkedin-blue.png';
import githubLogoBlue from '../images/github-blue.png';

function ContactComp() {
    const { ref, inView } = useInView({
        threshold: .4
    });

    const inViewAnimation = useAnimation();

    useEffect(() => {
        if(inView) {
            inViewAnimation.start({
                // x: 0,
                // scale: 1,
                opacity: 1,
                transition: {
                    type: "spring", duration: 1, bounce: 0.1
                }
            })
        }
        if(!inView) {
            inViewAnimation.start({
                // x: "50vw",
                // scale: .4,
                opacity: 0
            })
        }
        console.log("use effect hook, inView = ", inView);
    }, [inView]);


    return (
        <div className="contact-comp">
            <h1 id="contact" className="other-title remove-whitespace">Contact <span className="blue-text">Me</span></h1>
            <motion.div className="contact-boxes" ref={ref} animate={ inViewAnimation }>
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
                    <a className="blue-text" href="https://www.linkedin.com/in/austin-cook-id/" target="_blank" rel="noreferrer"><p className="less-margin">austin-cook-id</p></a>
                </div>
                <div className="contact-box">
                    <div className="contact-image">
                        <a href="https://github.com/Austin-Cook" target="_blank" rel="noreferrer"><motion.img src={githubLogoBlue} alt="GitHub" whileHover={{ y: "-.5vw" }} transition={{ duration: .2}}></motion.img></a> 
                    </div>
                    <h3 className="less-margin">GitHub</h3>
                    <a className="blue-text" href="https://github.com/Austin-Cook" target="_blank" rel="noreferrer"><p className="less-margin">Austin-Cook</p></a>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactComp;