@extends('layouts.admin') @section('admin-content')
<div class="flex md:flex-col sm:flex-col lg:flex-row">
    <div class="flex flex-col w-full">
        <div class="heading text-center font-bold text-2xl m-2 text-gray-800">
            Utwórz nowy post
        </div>
        <form method="POST" action="{{ route('new-post') }}" enctype="multipart/form-data">
            @csrf
        <div
            class="editor mx-auto w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg"
        >
                <input
                class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                spellcheck="false"
                placeholder="Tytuł"
                type="text"
                name="title"
                id="title"
                />
                <textarea
                    class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                    spellcheck="false"
                    placeholder="Treść nowego posta"
                    name="body"
                    id="body"
                ></textarea>

                <input class="bg-indigo-600 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full" type="file" id="post_image" name="post_image">
                
                <div class="icons flex text-gray-500 m-2">
                </div>
                <!-- buttons -->
                <div class="buttons flex">
                    <button
                    type="reset"
                        class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                    >
                        Resetuj
                    </button>
                    <button
                    type="submit"
                        class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
