import * as React from "react"
import data from "../../Services/data.json";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Greeting.css";
import Image from "../../Assets/images/website-creator-bro.svg";

/**
 * Greeting component.
 */
export default function Greeting() {
    return (
        <div className="greet-main" id="greeting">
            <div className="greeting-main">
                <div className="greeting-text-div">
                    <div>
                        <h1 className="greeting-text">
                            {data.name}
                        </h1>
                        <h2 className="greeting-nickname">
                            ( {data.position} )
                        </h2>
                        <p className="greeting-text-p subTitle">
                            {data.headline}
                        </p>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="greeting-image-div">
                    <img
                        alt="Sitting on table with laptop"
                        src={Image}
                    ></img>
                </div>
            </div>
        </div>
    )
}