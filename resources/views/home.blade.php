@extends('layouts.app') @section('content')
<div id="MiddleMainContent"></div>

<div className="rounded-lg my-3">
    
    @foreach ($posts as $post)
        <article class="flex flex-col shadow my-4">
            <!-- Article Image -->
            <a href="#" class="hover:opacity-75">
                <img
                    class="object-cover w-full max-h-96"
                    src="{{ asset('/storage/'.$post->post_image) }}"
                />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
                <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4"
                    >Posty</a
                >
                <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4"
                    >{{ $post->title }}</a
                >
                <p href="#" class="text-sm pb-8">
                    <a href="#" class="font-semibold hover:text-gray-800"
                        >{{ $post->user->name }}</a
                    >, {{ Illuminate\Support\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('F j Y') }}
                </p>
                <p class="pb-3 text-justify">
                    {{ Str::limit($post->body, '250', '...') }}
                </p>
            </div>
        </article>
    @endforeach

    {{ $posts->links() }}

    <div
        class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6"
    >
        <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
            <img
                src="https://d-art.ppstatic.pl/kadry/k/r/f5/c0/4f4f78862941a_o_full.jpg"
                class="rounded-xl h-32 w-32 shadow pr-4"
            />
        </div>
        <div class="flex-1 flex flex-col justify-center md:justify-start">
            <p class="font-semibold text-2xl">IILO Gdynia</p>
            <p class="pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur vel neque non libero suscipit suscipit eu eu urna.
            </p>
            <div
                class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4"
            >
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
@endsection
