import React from "react";
import ReactDOM from "react-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import MainPosts from "./MainPosts";
import Banner from "./Banner";

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

export default function RightSidebar() {
    return (
        <div>
            <div className="flex items-center justify-center mb-3">
                <figure className="relative max-w-xs">
                    <img
                        className="rounded-lg shadow-xl"
                        src="https://s-trojmiasto.pl/zdj/c/n/9/1246/3000x0/1246898.jpg"
                    />
                    <figcaption className=" w-full items-center bg-black rounded-lg opacity-60 text-lg -mt-12 text-white px-4">
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
                    International Moot Court Gdynia, Poland 26.01. - 01.02. 2020
                </a>
                <img
                    className="object-scale-down max-h-24 w-full"
                    src="https://lo2gdynia.pl/images/2019_20/icm/log.jpg"
                />
            </div>
        </div>
    );
}

if (document.getElementById("RightSidebar")) {
    ReactDOM.render(<RightSidebar />, document.getElementById("RightSidebar"));
}