import React from "react";
import "./Header.css";
import {NavLink, useLocation} from "react-router-dom";
import data from "../../Services/data.json";
import {WebUiUris} from "../../Pages/WebUiUris";

/**
 * Header component.
 */
export default function Header() {
    return (
        <header className="header">
            <NavLink className="logo" to={WebUiUris.HOME}>
                <span> &lt;</span>
                <span className="logo-name">{data.logoName}</span>
                <span>/&gt;</span>
            </NavLink>
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
                <li><MyNavLink to={WebUiUris.HOME} text={"Home"}/></li>
                <li><MyNavLink to={WebUiUris.EDUCATION} text={data.education.title}/></li>
                <li><MyNavLink to={WebUiUris.EXPERIENCE} text={data.experience.title}/></li>
                <li><MyNavLink to={WebUiUris.PROJECTS} text={data.projects.title}/></li>
                <li><MyNavLink to={WebUiUris.ABOUT} text="About Me"/></li>
            </ul>
        </header>
    );
};


/**
 * Properties for MyNavLink component.
 *
 * @param to link to
 * @param text link text
 */
interface MyNavLinkProps {
    to: string;
    text: string;
}

/**
 * MyNavLink component.
 */
function MyNavLink({to, text}: MyNavLinkProps) {
    const path = useLocation().pathname;

    return (
        <NavLink
            to={to}
            style={{fontWeight: path == to ? "bold" : "normal"}}
        >
            {text}
        </NavLink>
    );
}