import React from "react";
import "./TopButton.css";

export default function TopButton() {
    function GoUpEvent() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    function scrollFunction() {
        const topButton = document.getElementById("topButton");
        if (topButton === null) return;
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
            topButton.style.visibility = "visible";
        else
            topButton.style.visibility = "hidden";
    }

    window.onscroll = function () {
        scrollFunction();
    };

    return (
        <div
            onClick={GoUpEvent}
            title="Go up"
        >
            <i className="fa-solid fa-arrow-up fa-fade" id="topButton"/>
        </div>
    );
}
