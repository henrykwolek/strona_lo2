import React from "react";
import ReactDOM from "react-dom";

export default function MainPosts({ bottomImg }) {
    return (
        <div className="rounded-lg">
            <article className="flex flex-col shadow my-4">
                <a href="#" className="hover:opacity-75">
                    <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a
                        href="#"
                        class="text-blue-700 text-sm font-bold uppercase pb-4"
                    >
                        Ogłoszenie
                    </a>
                    <a
                        href="#"
                        class="text-3xl font-bold hover:text-gray-700 pb-4"
                    >
                        Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
                    </a>
                    <p href="#" class="text-sm pb-3">
                        Uworzono przez{" "}
                        <a href="#" class="font-semibold hover:text-gray-800">
                            Administrator
                        </a>
                        , 25 marzec 2018
                    </p>
                    <p class="pb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vel neque non libero suscipit suscipit eu eu
                        urna. Proin bibendum urna mattis ante malesuada
                        ultrices. Etiam in turpis vitae elit dictum aliquet.
                        Donec mattis risus in turpis dapibus, eget tempus sem
                        tincidunt. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. In est enim,
                        imperdiet sed ornare quis, pellentesque vel risus. Nunc
                        vitae vestibulum turpis. Quisque eget eleifend urna.
                        Etiam et vulputate purus, ut egestas sem. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae; Duis quis neque non urna
                        venenatis mollis et at massa. Pellentesque sem lacus,
                        malesuada vel hendrerit molestie, mollis vel elit.
                    </p>
                </div>
            </article>

            <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
                <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/2_lo_w_gdyni.jpg"
                        class="rounded-full shadow h-32 w-32 mr-5"
                    />
                </div>
                <div class="flex-1 flex flex-col justify-center md:justify-start">
                    <p class="font-semibold text-2xl">IILO Gdynia</p>
                    <p class="pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur vel neque non libero suscipit suscipit eu eu
                        urna.
                    </p>
                    <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                        <a class="" href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a class="pl-4" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="pl-4" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="pl-4" href="#">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
