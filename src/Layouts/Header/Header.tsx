import React from "react";
import "./Header.css";
import {NavLink} from "react-router-dom";
import data from "../../Services/data.json";
import {WebUiUris} from "../../Pages/WebUiUris";

export default function Header() {
    return (<>
            <div>
                <header className="header">
                    <NavLink className="logo" to={"/"}>
                        <span> &lt;</span>
                        <span className="logo-name">{data.logoName}</span>
                        <span>/&gt;</span>
                    </NavLink>
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li>
                            <NavLink to={WebUiUris.HOME}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={WebUiUris.EDUCATION}>
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={WebUiUris.EXPERIENCE}>
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={WebUiUris.PROJECTS}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={WebUiUris.ABOUT}>
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    );
};
