import React from "react";
import ReactDOM from "react-dom";
import { fadeInLeft, fadeInRight, fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Route } from "react-router-dom";
import { event } from "jquery";

function Navbar() {
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
                className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-6"
                style={{
                    background: "#091c29",
                }}
            >
                <div className="w-full lg:w-9/12 px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <StyleRoot>
                            <a
                                className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                                href="/home"
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
                                    <a
                                        type="button"
                                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        href="/home"
                                    >
                                        <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i>
                                        <span className="ml-2">
                                            Strona główna
                                        </span>
                                    </a>
                                </li>
                                <div className="flex-col lg:flex-row">
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-transparent focus:outline-none"
                                            href="#pablo"
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
                                                        .classList.add(
                                                            "hidden"
                                                        );
                                                } else {
                                                    document
                                                        .getElementById(
                                                            "firstDropdown"
                                                        )
                                                        .classList.remove(
                                                            "hidden"
                                                        );
                                                }
                                            }}
                                        >
                                            <i className="fas fa-graduation-cap text-lg leading-lg text-white opacity-75"></i>
                                            <span className="ml-2">
                                                Struktura IILO
                                            </span>
                                        </button>
                                    </li>
                                    <StyleRoot>
                                        <ul
                                            id="firstDropdown"
                                            style={styles.fadeIn}
                                            class="hidden relative lg:absolute text-gray-700 pt-1"
                                        >
                                            <li class="w-full">
                                                <a
                                                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Dyrekcja
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Nauczyciele
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Pedagog/psycholog
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Administracja
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    RODO
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Polisa
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Samorząd uczniowski
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Rada rodziców
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Dokumenty szkolne
                                                </a>
                                            </li>
                                            <li class="w-full">
                                                <a
                                                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    PSO zachowania
                                                </a>
                                            </li>
                                        </ul>
                                    </StyleRoot>
                                </div>
                                <div className="flex-col lg:flex-row">
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-transparent focus:outline-none"
                                            href="#pablo"
                                            onClick={() => {
                                                if (
                                                    !document
                                                        .getElementById(
                                                            "secondDropdown"
                                                        )
                                                        .classList.contains(
                                                            "hidden"
                                                        )
                                                ) {
                                                    document
                                                        .getElementById(
                                                            "secondDropdown"
                                                        )
                                                        .classList.add(
                                                            "hidden"
                                                        );
                                                } else {
                                                    document
                                                        .getElementById(
                                                            "secondDropdown"
                                                        )
                                                        .classList.remove(
                                                            "hidden"
                                                        );
                                                }
                                            }}
                                        >
                                            <i className="fas fa-building text-lg leading-lg text-white opacity-75"></i>
                                            <span className="ml-2">Liceum</span>
                                        </button>
                                    </li>
                                    <StyleRoot>
                                        <ul
                                            id="secondDropdown"
                                            style={styles.fadeIn}
                                            class="hidden relative lg:absolute text-gray-700 pt-1"
                                        >
                                            <li class="">
                                                <a
                                                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Profile klas
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Konkursy i olimpiady
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Osiągnięcia sportowe
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Atuty
                                                </a>
                                            </li>
                                        </ul>
                                    </StyleRoot>
                                </div>
                                <div className="flex-col lg:flex-row">
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-transparent focus:outline-none"
                                            href="#pablo"
                                            onClick={() => {
                                                if (
                                                    !document
                                                        .getElementById(
                                                            "thirdDropdown"
                                                        )
                                                        .classList.contains(
                                                            "hidden"
                                                        )
                                                ) {
                                                    document
                                                        .getElementById(
                                                            "thirdDropdown"
                                                        )
                                                        .classList.add(
                                                            "hidden"
                                                        );
                                                } else {
                                                    document
                                                        .getElementById(
                                                            "thirdDropdown"
                                                        )
                                                        .classList.remove(
                                                            "hidden"
                                                        );
                                                }
                                            }}
                                        >
                                            <i className="fas fa-language text-lg leading-lg text-white opacity-75"></i>
                                            <span className="ml-2">
                                                Sekcja dwujęzyczna
                                            </span>
                                        </button>
                                    </li>
                                    <StyleRoot>
                                        <ul
                                            id="thirdDropdown"
                                            style={styles.fadeIn}
                                            class="hidden relative lg:absolute text-gray-700 pt-1"
                                        >
                                            <li class="">
                                                <a
                                                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Informacje
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Wymiana
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Version française
                                                </a>
                                            </li>
                                        </ul>
                                    </StyleRoot>
                                </div>
                                <div className="flex-col lg:flex-row">
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 focus:border-transparent focus:outline-none"
                                            href="#pablo"
                                            onClick={() => {
                                                if (
                                                    !document
                                                        .getElementById(
                                                            "fourthDropdown"
                                                        )
                                                        .classList.contains(
                                                            "hidden"
                                                        )
                                                ) {
                                                    document
                                                        .getElementById(
                                                            "fourthDropdown"
                                                        )
                                                        .classList.add(
                                                            "hidden"
                                                        );
                                                } else {
                                                    document
                                                        .getElementById(
                                                            "fourthDropdown"
                                                        )
                                                        .classList.remove(
                                                            "hidden"
                                                        );
                                                }
                                            }}
                                        >
                                            <i className="fas fa-phone-square text-lg leading-lg text-white opacity-75"></i>
                                            <span className="ml-2">
                                                Kontakt
                                            </span>
                                        </button>
                                    </li>
                                    <StyleRoot>
                                        <ul
                                            id="fourthDropdown"
                                            style={styles.fadeIn}
                                            class="hidden relative lg:absolute text-gray-700 pt-1"
                                        >
                                            <li class="">
                                                <a
                                                    class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Adres
                                                </a>
                                            </li>
                                            <li class="">
                                                <a
                                                    class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                                                    href="#"
                                                >
                                                    Dojazd
                                                </a>
                                            </li>
                                        </ul>
                                    </StyleRoot>
                                </div>
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
