import React from "react";
import ReactDOM from "react-dom";
import { fadeInLeft, fadeInRight, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

function Navbar({ fixed }) {
    const styles = {
        fadeInRight: {
            animation: "x 1s",
            animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
        },
        fadeInLeft: {
            animation: "x 1s",
            animationName: Radium.keyframes(fadeInLeft, "fadeInLeft"),
        },
        fadeIn: {
            animation: "x 1s",
            animationName: Radium.keyframes(fadeIn, "fadeIn"),
        },
    };
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav
                className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3"
                style={{
                    background: "#091c29",
                }}
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <StyleRoot>
                            <a
                                className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                                href="{{ route('home') }}"
                                style={styles.fadeInLeft}
                            >
                                IILO GDYNIA{" "}
                                <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
                            </a>
                        </StyleRoot>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <StyleRoot>
                        <div
                            className={
                                "lg:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                            style={styles.fadeInRight}
                        >
                            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (
                                                !document
                                                    .getElementById(
                                                        "firstDropdown"
                                                    )
                                                    .classList.contains(
                                                        "hidden"
                                                    )
                                            ) {
                                                document
                                                    .getElementById(
                                                        "firstDropdown"
                                                    )
                                                    .classList.add("hidden");
                                            } else {
                                                document
                                                    .getElementById(
                                                        "firstDropdown"
                                                    )
                                                    .classList.remove("hidden");
                                            }
                                        }}
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    >
                                        <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">
                                            Strona główna
                                        </span>
                                    </button>
                                    <StyleRoot>
                                        <ul
                                            id="firstDropdown"
                                            style={styles.fadeIn}
                                            class="hidden relative lg:absolute text-gray-700 pt-1"
                                        >
                                            <li class="">
                                                <a
                                                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    One
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Two
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Three is the magic number
                                                </a>
                                            </li>
                                        </ul>
                                    </StyleRoot>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        href="#pablo"
                                    >
                                        <i className="fas fa-graduation-cap text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">
                                            Struktura IILO
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        href="#pablo"
                                    >
                                        <i className="fas fa-building text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">Liceum</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        href="#pablo"
                                    >
                                        <i className="fas fa-language text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">
                                            Sekcja dwujęzyczna
                                        </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        href="#pablo"
                                    >
                                        <i className="fas fa-phone-square text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">Kontakt</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </StyleRoot>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

if (document.getElementById("navbar")) {
    ReactDOM.render(<Navbar />, document.getElementById("navbar"));
}
