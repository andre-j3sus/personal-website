import * as React from "react"
import data from "../../Services/data.json";
import "./SocialMedia.css"

/**
 * Social media component.
 */
export default function SocialMedia() {
    return (
        <div className="social-media-div">
            {data.contacts.data.map((media) => {
                return (
                    <a
                        href={media.url}
                        className={`icon-button`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={media.name}
                    >
                        <span className="sc-AxjAm fpASeU">
                            <i
                                className={media.fontAwesomeIcon}
                                style={{backgroundColor: media.backgroundColor}}
                            ></i>
                        </span>
                    </a>
                );
            })}
        </div>
    )
}
