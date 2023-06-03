import React from "react";
import "./Footer.css";
import {data} from "./data.json";
import Typography from "@mui/material/Typography";

export default function Footer() {
    return (
        <div className="footer-div">
            <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                className="footer-text"
                gutterBottom
            >
                Made with <span role="img">❤️</span> by {data.title}
            </Typography>
        </div>
    )
}