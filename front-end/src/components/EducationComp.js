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
                        <motion.img src={byuLogo} alt="Brigham Young University" whileHover={{ scale: 1.3 }}></motion.img>
                        </div>
                    </div>
                    <div className="education-box-right education-text">
                        <p>2021 - 2025</p>
                        <p>Brigham Young UniversityEmphasis in Software Engineering</p>
                        <p>Expected to graduate in 2025</p>
                        <p>Current GPA - 4.0</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationComp;