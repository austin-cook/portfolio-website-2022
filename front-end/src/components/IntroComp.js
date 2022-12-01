import React from "react";
import '../App.css'

function IntroComp() {
    return (
        <div className="gray-background">
            <div className="intro-comp gray-background white-text">
                <h1 className="intro-title remove-whitespace">Hi, I'm <span className="blue-text">Austin</span></h1>
                <p className="intro-description remove-whitespace">I'm currently a Sophomore Computer Science student at BYU. I also work as a Research Assistant in the BYU Internet Security Research Lab.</p>
            </div>
        </div>
    )
}

export default IntroComp;