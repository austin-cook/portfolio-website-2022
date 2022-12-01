import React from "react";
import '../App.css'
import { motion } from "framer-motion";
import byuLogo from '../images/byu.png';

function EducationComp() {
    return (
        <div className="education-comp">
            <h1 className="intro-title remove-whitespace">My <span className="blue-text">Education</span></h1>
            <div className="education-box-outer">
                <div className="education-box-inner">
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
                </div>
            </div>
        </div>
    )
}

export default EducationComp;