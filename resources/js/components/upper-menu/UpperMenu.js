import React from "react";
import ReactDOM from "react-dom";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
    slideInLeft: {
        animation: "x 1s",
        animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
    },
};

function UpperMenu() {
    return (
        <StyleRoot>
            <div className="w-full mx-2" style={styles.slideInLeft}>
                <ul className="list-none text-3xl">
                    <li>Strona główna</li>
                    <li>Struktura IILO</li>
                    <li>Liceum</li>
                    <li>Sekcja dwujęzyczna</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        </StyleRoot>
    );
}

export default UpperMenu;

if (document.getElementById("UpperMenu")) {
    ReactDOM.render(<UpperMenu />, document.getElementById("UpperMenu"));
}
