import React from "react";
import '../App.css'
import { motion } from "framer-motion";
import  { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import byuLogo from '../images/byu.png';


function EducationComp() {
    const { ref, inView } = useInView({
        threshold: .2
    });

    const inViewAnimation = useAnimation();

    useEffect(() => {
        if(inView) {
            inViewAnimation.start({
                // x: 0,
                scale: 1,
                opacity: 1,
                transition: {
                    type: "spring", duration: .6, bounce: 0.1
                }
            })
        }
        if(!inView) {
            inViewAnimation.start({
                // x: "50vw",
                scale: .4,
                opacity: 0
            })
        }
        console.log("use effect hook, inView = ", inView);
    }, [inView]);

    return (
        <div className="education-comp">
            <h1 id="education" className="other-title remove-whitespace">My <span className="blue-text">Education</span></h1>
            <motion.div className="education-box-outer" ref={ref} animate={ inViewAnimation }>
                <motion.div className="education-box-inner">
                    <div className="education-box-left">
                        <div className="education-image">
                            <motion.img src={byuLogo} alt="Brigham Young University" whileHover={{ scale: 1.1 }}></motion.img>
                        </div>
                    </div>
                    <div className="education-box-right">
                        <p className="less-margin">2021 - 2025</p>
                        <p className="less-margin">Brigham Young University - Bachelor of Computer ScienceEmphasis in Software Engineering</p>
                        <p className="less-margin">Current GPA - 4.0</p>
                        <ul className="less-margin">
                            <li>Emphasis in Software Engineering</li>
                            <li>Physical and Mathematical Science Dean's List 2021 & 2022</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default EducationComp;