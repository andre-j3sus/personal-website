import * as React from "react"
import data from "../../Services/data.json";
import "./Projects.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import DegreeCard from "../../Components/DegreeCard/DegreeCard";

/**
 * Projects page.
 */
export default function Projects() {
    return (
        <div className="projects-main">
            <div className="basic-projects">
                <div className="projects-heading-div">
                    <div className="projects-heading-img-div">
                        <img
                            src={require(`../../Assets/images/${data.projects.headerImagePath}`)}
                            alt="Projects"
                            width={"85%"}
                        />
                    </div>
                    <div className="projects-heading-text-div">
                        <h1 className="projects-heading-text">
                            {data.projects.title}
                        </h1>
                        <h3 className="experience-heading-sub-text">
                            {data.projects.subtitle}
                        </h3>
                        <p className="projects-header-detail-text subTitle">
                            {data.projects.description}
                        </p>

                        {/*<Button
                className="project-button"
                href={greeting.githubProfile}
            >More Projects</Button>*/}
                    </div>
                </div>
            </div>
            <div className="main" id="educations">
                <div className="educations-header-div">
                    <h1 className="educations-header">
                        Projects
                    </h1>
                </div>
                <div className="educations-body-div">
                    {data.projects.projects.map((project) => {
                        return <ProjectCard project={project} key={project.title}/>;
                    })}
                </div>
            </div>

            {/* Publications  */}
            {data.projects.publications.length > 0 ? (
                <div className="basic-projects">
                    <div className="publications-heading-div">
                        <div className="publications-heading-text-div">
                            <h1 className="publications-heading-text">
                                Publications and Research Papers
                            </h1>
                        </div>
                    </div>
                </div>
            ) : null}

            {/*<div className="repo-cards-div-main">
                {data.publications.publications.map((pub) => {
                    return <PublicationCard pub={pub}/>;
                })}
            </div>*/}
        </div>
    );
}