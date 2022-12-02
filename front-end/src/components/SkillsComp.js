import React from "react";
import '../App.css'
import { motion } from "framer-motion";

import cppLogo from '../images/cpp.png';
import pythonLogo from '../images/python.png';
import jsLogo from '../images/js.png';
import cLogo from '../images/c.png';
import reactLogo from '../images/react.png';
import htmlLogo from '../images/html.png';
import cssLogo from '../images/css.png';
import nodeLogo from '../images/node.png';
import mongodbLogo from '../images/mongodb.png';
import bootstrapLogo from '../images/bootstrap.png';
import gitLogo from '../images/git.png';
import linuxLogo from '../images/linux.png';
import ubuntuLogo from '../images/ubuntu.png';

function SkillsComp() {
    return (
        <div className="gray-background">
            <div className="skills-comp gray-background white-text">
                <h1 id="skills" className="other-title remove-whitespace">My <span className="blue-text">Skills</span></h1>
                <div className="skills">
                    <div className="skill">
                        <motion.img src={cppLogo} alt="C++" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">C++</p>
                    </div>
                    <div className="skill">
                        <motion.img src={cLogo} alt="C" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">C</p>
                    </div>
                    <div className="skill">
                        <motion.img src={pythonLogo} alt="Python" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Python</p>
                    </div>
                    <div className="skill">
                        <motion.img src={jsLogo} alt="JavaScript" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">JavaScript</p>
                    </div>
                    <div className="skill">
                        <motion.img src={reactLogo} alt="React" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">React</p>
                    </div>
                    <div className="skill">
                        <motion.img src={htmlLogo} alt="HTML" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">HTML</p>
                    </div>
                    <div className="skill">
                        <motion.img src={cssLogo} alt="CSS" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">CSS</p>
                    </div>
                    <div className="skill">
                        <motion.img src={nodeLogo} alt="Node.js" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Node.js</p>
                    </div>
                    <div className="skill">
                        <motion.img src={mongodbLogo} alt="MongoDB" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">MongoDB</p>
                    </div>
                    <div className="skill">
                        <motion.img src={bootstrapLogo} alt="Bootstrap" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Bootstrap</p>
                    </div>
                    <div className="skill">
                        <motion.img src={gitLogo} alt="Git" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Git</p>
                    </div>
                    <div className="skill">
                        <motion.img src={linuxLogo} alt="Linux" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Linux</p>
                    </div>
                    <div className="skill">
                        <motion.img src={ubuntuLogo} alt="Ubuntu" whileHover={{ scale: 1.3 }}></motion.img>
                        <p className="to-bottom">Ubuntu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsComp;