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

export default function MiddleMainContent() {
    return (
        <div>
            <StyleRoot>
                <div>
                    <div style={styles.fadeIn}>
                        <img
                            id="imageSlideshow"
                            className="object-scale-down mx-auto w-auto h-auto shadow-lg rounded-lg"
                            src={images[0]}
                        />
                    </div>
                </div>
            </StyleRoot>
            <div className="text-center px-6 py-4">
                <span
                    id="firstSpan"
                    className="w-5 h-5 mx-2 bg-gray-500 inline-block rounded-full cursor-pointer"
                    onClick={() => {
                        span_ids.forEach((element) => {
                            if (element != "firstSpan") {
                                if (
                                    document
                                        .getElementById(element)
                                        .classList.contains("bg-gray-500")
                                ) {
                                    document
                                        .getElementById(element)
                                        .classList.remove("bg-gray-500");
                                    document
                                        .getElementById(element)
                                        .classList.add("bg-gray-300");
                                    document
                                        .getElementById("firstSpan")
                                        .classList.remove("bg-gray-300");
                                    document
                                        .getElementById("firstSpan")
                                        .classList.add("bg-gray-500");
                                } else {
                                    if (
                                        document
                                            .getElementById(element)
                                            .classList.contains("bg-gray-300")
                                    ) {
                                        document
                                            .getElementById("firstSpan")
                                            .classList.remove("bg-gray-300");
                                        document
                                            .getElementById("firstSpan")
                                            .classList.add("bg-gray-500");
                                    }
                                }
                            }
                        });
                        document.getElementById("imageSlideshow").src =
                            images[0];
                    }}
                ></span>
                <span
                    id="secondSpan"
                    className="w-5 h-5 mx-2 bg-gray-300 inline-block rounded-full cursor-pointer"
                    onClick={() => {
                        span_ids.forEach((element) => {
                            if (element != "secondSpan") {
                                if (
                                    document
                                        .getElementById(element)
                                        .classList.contains("bg-gray-500")
                                ) {
                                    document
                                        .getElementById(element)
                                        .classList.remove("bg-gray-500");
                                    document
                                        .getElementById(element)
                                        .classList.add("bg-gray-300");
                                    document
                                        .getElementById("secondSpan")
                                        .classList.remove("bg-gray-300");
                                    document
                                        .getElementById("secondSpan")
                                        .classList.add("bg-gray-500");
                                } else {
                                    if (
                                        document
                                            .getElementById(element)
                                            .classList.contains("bg-gray-300")
                                    ) {
                                        document
                                            .getElementById("secondSpan")
                                            .classList.remove("bg-gray-300");
                                        document
                                            .getElementById("secondSpan")
                                            .classList.add("bg-gray-500");
                                    }
                                }
                            }
                        });
                        document.getElementById("imageSlideshow").src =
                            images[1];
                    }}
                ></span>
                <span
                    id="thirdSpan"
                    className="w-5 h-5 mx-2 bg-gray-300 inline-block rounded-full cursor-pointer"
                    onClick={() => {
                        span_ids.forEach((element) => {
                            if (element != "thirdSpan") {
                                if (
                                    document
                                        .getElementById(element)
                                        .classList.contains("bg-gray-500")
                                ) {
                                    document
                                        .getElementById(element)
                                        .classList.remove("bg-gray-500");
                                    document
                                        .getElementById(element)
                                        .classList.add("bg-gray-300");
                                    document
                                        .getElementById("thirdSpan")
                                        .classList.remove("bg-gray-300");
                                    document
                                        .getElementById("thirdSpan")
                                        .classList.add("bg-gray-500");
                                } else {
                                    if (
                                        document
                                            .getElementById(element)
                                            .classList.contains("bg-gray-300")
                                    ) {
                                        document
                                            .getElementById("thirdSpan")
                                            .classList.remove("bg-gray-300");
                                        document
                                            .getElementById("thirdSpan")
                                            .classList.add("bg-gray-500");
                                    }
                                }
                            }
                        });
                        document.getElementById("imageSlideshow").src =
                            images[2];
                    }}
                ></span>
                <span
                    id="fourthSpan"
                    className="w-5 h-5 mx-2 bg-gray-300 inline-block rounded-full cursor-pointer"
                    onClick={() => {
                        span_ids.forEach((element) => {
                            if (element != "fourthSpan") {
                                if (
                                    document
                                        .getElementById(element)
                                        .classList.contains("bg-gray-500")
                                ) {
                                    document
                                        .getElementById(element)
                                        .classList.remove("bg-gray-500");
                                    document
                                        .getElementById(element)
                                        .classList.add("bg-gray-300");
                                    document
                                        .getElementById("fourthSpan")
                                        .classList.remove("bg-gray-300");
                                    document
                                        .getElementById("fourthSpan")
                                        .classList.add("bg-gray-500");
                                } else {
                                    if (
                                        document
                                            .getElementById(element)
                                            .classList.contains("bg-gray-300")
                                    ) {
                                        document
                                            .getElementById("fourthSpan")
                                            .classList.remove("bg-gray-300");
                                        document
                                            .getElementById("fourthSpan")
                                            .classList.add("bg-gray-500");
                                    }
                                }
                            }
                        });
                        document.getElementById("imageSlideshow").src =
                            images[3];
                    }}
                ></span>
                <span
                    id="fifthSpan"
                    className="w-5 h-5 mx-2 bg-gray-300 inline-block rounded-full cursor-pointer"
                    onClick={() => {
                        span_ids.forEach((element) => {
                            if (element != "fifthSpan") {
                                if (
                                    document
                                        .getElementById(element)
                                        .classList.contains("bg-gray-500")
                                ) {
                                    document
                                        .getElementById(element)
                                        .classList.remove("bg-gray-500");
                                    document
                                        .getElementById(element)
                                        .classList.add("bg-gray-300");
                                    document
                                        .getElementById("fifthSpan")
                                        .classList.remove("bg-gray-300");
                                    document
                                        .getElementById("fifthSpan")
                                        .classList.add("bg-gray-500");
                                } else {
                                    if (
                                        document
                                            .getElementById(element)
                                            .classList.contains("bg-gray-300")
                                    ) {
                                        document
                                            .getElementById("fifthSpan")
                                            .classList.remove("bg-gray-300");
                                        document
                                            .getElementById("fifthSpan")
                                            .classList.add("bg-gray-500");
                                    }
                                }
                            }
                        });
                        document.getElementById("imageSlideshow").src =
                            images[4];
                    }}
                ></span>
            </div>
            <div id="homePagePosts">
                {/* <Banner></Banner> */}
                <MainPosts></MainPosts>
            </div>
        </div>
    );
}

if (document.getElementById("MiddleMainContent")) {
    ReactDOM.render(
        <MiddleMainContent />,
        document.getElementById("MiddleMainContent")
    );
}
