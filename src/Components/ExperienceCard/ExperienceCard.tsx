import React from "react";
import "./ExperienceCard.css";

function ExperienceCard({experience}) {
    return (
        <div className="degree-card">
            {experience.company.logoPath && (
                <div className="card-img">
                    <img
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            transform: "scale(0.9)",
                        }}
                        src={require(`../../Assets/images/${experience.company.logoPath}`)}
                        alt={experience.company}
                    />
                </div>
            )}
            <div
                className="card-body"
                style={{width: experience.logoPath ? "90%" : "100%"}}
            >
                <div
                    className="body-header"
                >
                    <div className="body-header-title">
                        <h2 className="card-title">
                            {experience.title}
                        </h2>
                        <h3 className="card-subtitle">
                            {experience.company.name}
                        </h3>
                    </div>
                    <div className="body-header-duration">
                        <h3 className="duration">
                            {experience.duration}
                        </h3>
                    </div>
                </div>
                <div className="body-content">
                    {experience.descriptions.map((sentence) => {
                        return (
                            <p className="content-list" key={sentence}>
                                {sentence}
                            </p>
                        );
                    })}
                    {experience.company.url && (
                        <a
                            href={experience.url}
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

export default ExperienceCard;
