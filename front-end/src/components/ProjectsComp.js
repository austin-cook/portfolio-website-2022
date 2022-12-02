import React from "react";
import '../App.css'
import { motion } from "framer-motion";
import  { useInView } from 'react-intersection-observer'
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

import datalogScreenshot from '../images/datalog.jpg';
import interceptorScreenshot from '../images/interceptor.png';
import tacoScreenshot from '../images/taco.jpg';
import cppLogo from '../images/cpp.png';
import pythonLogo from '../images/python.png';
import jsLogo from '../images/js.png';
import reactLogo from '../images/react.png';
import nodeLogo from '../images/node.png';
import expressLogo from '../images/express.png';
import bootstrapLogo from '../images/bootstrap.png';

function ProjectsComp() {
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    const inViewAnimation = useAnimation();

    useEffect(() => {
        if(inView) {
            inViewAnimation.start({
                // x: 0,
                opacity: 1,
                transition: {
                    type: "spring", duration: 1, bounce: 0.1
                }
            })
        }
        if(!inView) {
            inViewAnimation.start({
                // x: "50vw",
                opacity: 0
            })
        }
        console.log("use effect hook, inView = ", inView);
    }, [inView]);

    return (
        <div className="projects-comp">
            <h3 id="projects" className="other-title extra-padding remove-whitespace">My <span className="blue-text">Projects</span></h3>
            <motion.div ref={ref}  animate={ inViewAnimation }>
                <motion.div className="project">
                    <div className="project-screenshot">
                        <a href="https://github.com/Austin-Cook/236-Interpreter-Project" target="_blank" rel="noreferrer"><motion.img className="screenshot-border" src={datalogScreenshot} alt="Datalog" whileHover={{ scale: 1.05 }}></motion.img></a>
                    </div>
                    <div className="project-text">
                        <h3>Datalog Interpreter</h3>
                        <div className="made-with-line">
                            <p className="remove-whitespace">Made with: </p>
                            <div className="made-with-logo">
                                <motion.img src={cppLogo} alt="C++" whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                        </div>
                        <p>A database program with functionality to recieve schemes, facts, rules, and queries and perform computations given the input. Includes a functional lexar, parser, and interpreter which generate tokens, verify grammer adherence, interpret instructions, generate new facts, and evaluate queries. Optimized computations by grouping elements in strongly connected compunents through the application of adjacency lists and the depth-first-search algorithm.</p>
                    </div>
                </motion.div>
                <motion.div className="project">
                    <div className="project-screenshot">
                        <motion.img className="screenshot-border" src={interceptorScreenshot} alt="Interceptor" whileHover={{ scale: 1.05 }}></motion.img>
                    </div>
                    <div className="project-text">
                        <h3>End to End Encryption Interceptor</h3>
                        <div className="made-with-line">
                            <p className="remove-whitespace">Made with: </p>
                            <div className="made-with-logo">
                                <motion.img src={pythonLogo} alt="Python" whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                        </div>
                        <p>Redesigned and implemented the user interface for an encryption program. Includes functionality to encrypt text while intercepting and maintaining exclusive access to keystrokes. Learned about working with a backend API and sockets to create a functional application. GUI created using Python Tkinter library.</p>
                    </div>
                </motion.div>
                <motion.div className="project">
                    <div className="project-screenshot">
                        <a href="https://austincook.link/taco/build/#/" target="_blank" rel="noreferrer"><motion.img className="screenshot-border" src={tacoScreenshot} alt="Streetside Tacos" whileHover={{ scale: 1.05 }}></motion.img></a>
                    </div>
                    <div className="project-text">
                        <h3>Taco Shop Website</h3>
                        <div className="made-with-line">
                            <p className="remove-whitespace">Made with: </p>
                            <div className="made-with-logo">
                                <motion.img src={jsLogo} alt="JavaScript"  whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                            <div className="made-with-logo">
                                <motion.img src={reactLogo} alt="React"  whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                            <div className="made-with-logo">
                                <motion.img src={nodeLogo} alt="Node"  whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                            <div className="made-with-logo">
                                <motion.img src={bootstrapLogo} alt="Bootstrap"  whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                            <div className="longer-logo">
                                <motion.img className="longer-logo" src={expressLogo} alt="Express"  whileHover={{ rotate: 45, scale: 1.1 }} transition={{ duration: .075}}></motion.img>
                            </div>
                        </div>
                        <p>Used various technologies to create a fully functional website. Used Express and MongoDB to create two API's, one to create user reviews and the other to add visitors' hometowns</p>
                    </div>
                </motion.div>
            </motion.div>
            
        </div>
    )
}

export default ProjectsComp;