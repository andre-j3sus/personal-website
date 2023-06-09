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
                <li><MyNavLink to={WebUiUris.EDUCATION} text={"Education"}/></li>
                <li><MyNavLink to={WebUiUris.EXPERIENCE} text={"Experience"}/></li>
                <li><MyNavLink to={WebUiUris.PROJECTS} text={"Projects"}/></li>
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
    const onMouseEnter = (event) => {
        const el = event.target;
        el.style.backgroundColor = "#f5f5f5";
    };

    const onMouseOut = (event) => {
        const el = event.target;
        el.style.backgroundColor = "transparent";
    };

    return (
        <NavLink
            to={to}
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}
            style={{fontWeight: path == to ? "bold" : "normal"}}
        >
            {text}
        </NavLink>
    );
}