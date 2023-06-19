import "./Skills.css";
import data from "../../Services/data.json";
import * as React from "react";
import {Icon} from "@iconify/react";

export default function Skills() {
    return (
        <div className="main" id="skills">
            <div className="skills-header-div">
                <h1 className="skills-header">
                    Skills
                </h1>
            </div>
            <div>
                {
                    data.skills.data.map((skill) => {
                        return (
                            <div className="skills-main-div" key={skill.title}>
                                <div className="skills-image-div">
                                    <img
                                        alt="Skill Image"
                                        src={require(`../../Assets/images/${skill.imagePath}`)}
                                        width={"80%"}
                                    ></img>
                                </div>

                                <div className="skills-text-div">
                                    <h1 className="skills-heading">
                                        {skill.title}
                                    </h1>
                                    <SoftwareSkills softwareSkills={skill.softwareSkills}/>
                                    <div>
                                        {skill.skills.map((skillSentence) => {
                                            return (
                                                <p className="subTitle skills-text" key={skillSentence}>
                                                    {skillSentence}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

function SoftwareSkills({softwareSkills}) {
    return (
        <div>
            <div className="software-skills-main-div">
                <ul className="dev-icons">
                    {softwareSkills.map((skill) => {
                        return (
                            <li className="software-skill-inline" key={skill.skillName}>
                                <Icon icon={skill.icon} style={skill.style}/>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}