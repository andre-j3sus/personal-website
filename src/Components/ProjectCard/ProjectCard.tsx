import React from "react";
import "./ProjectCard.css";
import {Fade, JackInTheBox} from "react-awesome-reveal";
import {Button} from "@mui/material";

function ProjectCard({project}) {
    return (
        <Fade delay={0.5}>
            <div className="degree-card">
                {project.logoPath && (
                    <JackInTheBox delay={0.5} triggerOnce>
                        <div className="card-img">
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    transform: "scale(0.9)",
                                }}
                                src={require(`../../Assets/images/${project.logoPath}`)}
                                alt={project.title}
                            />
                        </div>
                    </JackInTheBox>
                )}
                <div
                    className="card-body"
                    style={{width: project.logoPath ? "90%" : "100%"}}
                >
                    <div className="body-header">
                        <div className="body-header-title">
                            <h2 className="card-title">
                                {project.title}
                            </h2>
                            <h3 className="card-subtitle">
                                {project.subtitle}
                            </h3>
                        </div>
                        <div className="body-header-duration">
                            <h3 className="duration">
                                {project.duration}
                            </h3>
                            {project.url && (
                                <Button
                                    className="duration"
                                    variant="contained"
                                    size="small"
                                    onClick={() => window.open(project.url)}
                                    startIcon={<i className="fas fa-external-link-alt fa-2xs"></i>}
                                >
                                    Website
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="body-content">
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

export default ProjectCard;
