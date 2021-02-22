import React from "react";
import ReactDOM from "react-dom";

export default function Banner() {
    return (
        <div class="bg-indigo-600 rounded-lg">
            <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-4 mb-4">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <span class="flex p-2 rounded-lg text-white bg-indigo-800">
                            <i class="fas fa-home"></i>
                        </span>
                        <p class="ml-3 font-medium text-white truncate">
                            <span class="inline text-lg">
                                Strona główna
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
