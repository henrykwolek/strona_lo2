import React from "react";
import ReactDOM from "react-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function LeftSidebar() {
    return (
        <div>
            
        </div>
    );
}

if (document.getElementById("leftSidebar")) {
    ReactDOM.render(<LeftSidebar />, document.getElementById("leftSidebar"));
}