import React from "react";
import ReactDOM from "react-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import MainPosts from "./MainPosts";
import Banner from "./Banner";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    fadeIn: {
        animation: "x 1s",
        animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
};

const images = [
    "https://images4.alphacoders.com/103/thumb-1920-1038322.jpg",
    "https://wallpaperaccess.com/full/2029165.jpg",
    "https://images7.alphacoders.com/617/617537.jpg",
    "https://wallpapercave.com/wp/wp1880337.jpg",
    "https://i.pinimg.com/originals/60/53/64/605364731155b9c3643da99d121319d5.jpg",
];

const span_ids = [
    "firstSpan",
    "secondSpan",
    "thirdSpan",
    "fourthSpan",
    "fifthSpan",
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function LeftSidebar() {
    const classes = useStyles();
    return (
        <div>
            <button
                id="menuDodatkoweTrigger"
                className="px-3 mx-auto py-2 flex items-center uppercase font-bold leading-snug text-black text-base hover:opacity-75 focus:border-transparent focus:outline-none md:hidden lg:hidden"
                onClick={() => {
                    if (
                        !document
                            .getElementById("sidebarMenu")
                            .classList.contains("hidden")
                    ) {
                        document
                            .getElementById("sidebarMenu")
                            .classList.add("hidden");
                        document.getElementById(
                            "menuDodatkoweTrigger"
                        ).innerText = "Menu dodatkowe ▼";
                    } else {
                        document
                            .getElementById("sidebarMenu")
                            .classList.remove("hidden");
                        document.getElementById(
                            "menuDodatkoweTrigger"
                        ).innerText = "Menu dodatkowe ▲";
                    }
                }}
            >
                Menu dodatkowe ▼
            </button>
            <StyleRoot>
                <div
                    id="sidebarMenu"
                    class="overflow-hidden hidden lg:block md:block max-w-full text-sm bg-white rounded-lg w-full shadow-lg leading-normal mb-5"
                    style={styles.fadeIn}
                >
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Szkoła pamięta
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Rekrutacja
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Matura
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Po lekcjach
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Szkolna galeria
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Biblioteka
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Oferta biblioteki
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        NPRCz
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Projekt - La CDV
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Współpraca
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Wymiany
                    </a>
                    <a
                        href="#"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Strzelnica
                    </a>
                    <a
                        href="/dashboard"
                        class="block group hover:bg-blue-500 px-4 border-b py-2"
                    >
                        Redakcja
                    </a>
                </div>
            </StyleRoot>
            <div class="hidden w-full bg-white shadow md:flex lg:hidden xl:flex flex-col my-2 p-3">
                <p class="text-xl font-semibold pb-5">Galeria zdjęć</p>
                <div class="grid grid-cols-3 gap-3">
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
                    />
                    <img
                        class="hover:opacity-75"
                        src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
                    />
                </div>
                <a
                    href="#"
                    class="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
                >
                    Przeglądaj zdjęcia
                </a>
            </div>
            <div className="w-full mx-auto hidden md:block lg:hidden">
                <div className="flex items-center justify-center mb-3">
                    <figure className="relative max-w-xs">
                        <img
                            className="rounded-lg shadow-xl"
                            src="https://s-trojmiasto.pl/zdj/c/n/9/1246/3000x0/1246898.jpg"
                        />
                        <figcaption className="absolute w-full items-center bg-black rounded-lg opacity-60 text-lg -mt-12 text-white px-4">
                            <div className="font-bold text-lg pb-2 pt-2 mt-1 text-white w-full">
                                <h1>Historia szkoły</h1>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <StyleRoot>
                    <div
                        id="sidebarMenu"
                        class="overflow-hidden max-w-full text-sm bg-white rounded w-full shadow-lg leading-normal mb-5"
                        style={styles.fadeIn}
                    >
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            BIP
                        </a>
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            Plan lekcji
                        </a>
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            Plany dzwonków
                        </a>
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            Platforma Sunergia
                        </a>
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            Platforma miejsca ED
                        </a>
                        <a
                            href="#"
                            class="block group hover:bg-blue-500 px-4 border-b py-2"
                        >
                            Kalendarium
                        </a>
                    </div>
                </StyleRoot>
                <div className="flex flex-col">
                    <a
                        href="#"
                        class="text-blue-700 text-sm font-bold uppercase pb-4 mt-5 text-center"
                    >
                        Office 365 & Teams
                    </a>
                    <img
                        className="object-scale-down h-24 w-full"
                        src="https://office365online.pl/wp-content/uploads/2015/11/Office-365-Logo.jpg"
                    />
                    <img
                        className="object-scale-down h-24 w-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018–present%29.svg/1200px-Microsoft_Office_Teams_%282018–present%29.svg.png"
                    />
                    <a
                        href="#"
                        class="text-blue-700 text-center text-sm font-bold uppercase pb-4 mt-5"
                    >
                        International Moot Court Gdynia, Poland 26.01. - 01.02.
                        2020
                    </a>
                    <img
                        className="object-scale-down max-h-24 w-full"
                        src="https://lo2gdynia.pl/images/2019_20/icm/log.jpg"
                    />
                </div>
            </div>
            
        </div>
    );
}

if (document.getElementById("LeftSidebar")) {
    ReactDOM.render(<LeftSidebar />, document.getElementById("LeftSidebar"));
}
