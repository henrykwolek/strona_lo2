@extends('layouts.admin') @section('admin-content')
<div class="flex md:flex-col sm:flex-col lg:flex-row">
    <div class="flex flex-col w-full">
        <div class="heading text-center font-bold text-2xl m-2 text-gray-800">
            Edytuj istniejący post
        </div>
        <form method="POST" action="{{ route('edit-post', $post) }}" enctype="multipart/form-data">
            @csrf
            @method('PATCH')
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
                value="{{ $post->title }}"
                />
                <textarea
                    class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
                    spellcheck="false"
                    placeholder="Treść nowego posta"
                    name="body"
                    id="body"
                >{{ $post->body }}</textarea>

                <input class="bg-indigo-600 mt-4 hover:bg-indigo-700 text-white font-bold py-2 px-4 w-full" type="file" id="post_image" name="post_image">

                <div>
                    <h2 class="text-xl font-bold mt-2">Obecne zdjęcie</h2>
                    <img class="object-scale-down mt-4 max-h-72 border-gray-300" src="{{ asset('/storage/'.$post->post_image) }}" />
                </div>

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
                        Zapisz zmiany
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
