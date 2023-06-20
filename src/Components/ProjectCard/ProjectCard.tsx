import React from "react";
import "./ProjectCard.css";

function ProjectCard({project}) {
    return (
        <div className="degree-card">
            {project.logoPath && (
                <div className="card-img">
                    <img
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            transform: "scale(0.9)",
                        }}
                        src={require(`../../Assets/images/${project.logoPath}`)}
                        alt="Education"
                    />
                </div>
            )}
            <div
                className="card-body"
                style={{width: project.logoPath ? "90%" : "100%"}}
            >
                <div
                    className="body-header"
                >
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
                    </div>
                </div>
                <div className="body-content">
                    <p className="content-list">
                        {project.description}
                    </p>
                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="visit-btn">
                                <p className="btn">
                                    <strong>Visit Website</strong>
                                </p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
