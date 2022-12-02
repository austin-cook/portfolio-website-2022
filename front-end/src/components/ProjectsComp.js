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
                        <motion.img className="screenshot-border" src={datalogScreenshot} alt="Datalog" whileHover={{ scale: 1.05 }}></motion.img>
                    </div>
                    <div className="project-text">
                        <h3>Datalog Interpreter</h3>
                        <div className="made-with-line">
                            <p>Made with: </p>
                            <div class-name="made-with-logo">
                                {/* <motion.img src={cppLogo} alt="C++" whileHover={{ scale: 1.3 }}></motion.img> */}
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus luctus libero. Sed placerat a ipsum sed maximus. Morbi faucibus tortor vel purus volutpat, ut scelerisque lorem rutrum. Curabitur ut nisl nec urna tincidunt egestas ut et nisl. Etiam at convallis lacus. Aliquam in enim eu felis tempus ullamcorper. Cras et dapibus risus.</p>
                    </div>
                </motion.div>
                <motion.div className="project">
                    <div className="project-screenshot">
                        <motion.img className="screenshot-border" src={interceptorScreenshot} alt="C++" whileHover={{ scale: 1.05 }}></motion.img>
                    </div>
                    <div className="project-text">
                        <h3>End to End Encryption Interceptor</h3>
                        <p>Made with: Python, Tkinter</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus luctus libero. Sed placerat a ipsum sed maximus. Morbi faucibus tortor vel purus volutpat, ut scelerisque lorem rutrum. Curabitur ut nisl nec urna tincidunt egestas ut et nisl. Etiam at convallis lacus. Aliquam in enim eu felis tempus ullamcorper. Cras et dapibus risus.</p>
                    </div>
                </motion.div>
                <motion.div className="project">
                    <div className="project-screenshot">
                        <motion.img className="screenshot-border" src={tacoScreenshot} alt="C++" whileHover={{ scale: 1.05 }}></motion.img>
                    </div>
                    <div className="project-text">
                        <h3>Taco Shop Website</h3>
                        <p>Made with: JS, React, Node, Express, Bootstrap </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus luctus libero. Sed placerat a ipsum sed maximus. Morbi faucibus tortor vel purus volutpat, ut scelerisque lorem rutrum. Curabitur ut nisl nec urna tincidunt egestas ut et nisl. Etiam at convallis lacus. Aliquam in enim eu felis tempus ullamcorper. Cras et dapibus risus.</p>
                    </div>
                </motion.div>
            </motion.div>
            
        </div>
    )
}

export default ProjectsComp;