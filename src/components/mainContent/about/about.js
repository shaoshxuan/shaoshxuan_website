import React from "react";
import "./about.css";

const About = () => {
    const languages = ["Javascript", "HTML5", "CSS3", "jQuery", "Dart", "Python", "Php", "Java", "MySQL"];
    const frameworks = ["ReactJS", "Flutter", "GatsbyJS", "VueJS", "Flask"];
    return (
        <>
            <div className="topSepBar"></div>
            <div className="about sectionPad" id="about">
                <div className="sectionHeader">
                    <span style={{ color:"#45a29e" }}>&lt;</span> About <span style={{ color:"#45a29e" }}>/&gt;</span>
                </div>
                <div className="aboutInfo">
                    <div className="myDP">
                        <img src={require("../../../assets/shaoDP.png")} alt="shaoDP" />
                    </div>
                    <div className="subHeader">
                        HELLO WORLD!<br/>
                        SO, WHO AM I?
                    </div>
                    <div className="aboutMeContent">
                        I am Shao Shxuan, an aspiring Fullstack Developer. Currently an undergraduate located in Singapore, pursuing a double major in <span style={{ color: "#e41376", fontWeight: "600" }}>Software Development</span> and <span style={{ color: "#e41376", fontWeight: "600" }}>Cyber Security</span>.<br/>
                        Constantly researching and learning new technologies to improve myself, I believe what I'm doing is an <span style={{ color: "#e41376", fontWeight: "600" }}>art</span>. From problem solving to design and development, creativity is key!
                    </div>
                    <div className="constantBreak"></div>
                    <div className="subHeader">
                        Familiar Languages and Frameworks
                    </div>
                    
                    <div className="languages">
                        {languages.map((language, index) => {
                            return (
                                <div className="language" key={index}>
                                    [ {language} ]
                                </div>
                            )
                        })}
                    </div>
                    <div style={{ paddingBottom: "0.5rem" }}></div>
                    <div className="frameworks">
                        {frameworks.map((framework, index) => {
                            return (
                                <div className="framework" key={index}>
                                    [ {framework} ]
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;