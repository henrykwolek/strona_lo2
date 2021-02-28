@extends('layouts.admin') @section('admin-content') {{-- @foreach ($posts as
$post)
<p>{{ $post->title }}</p>
<img
    class="object-scale-down max-h-96"
    src="{{asset('/storage/'.$post->post_image)}}"
/>
<br />
@endforeach --}}

@if ($message = Session::get('success-saved'))
<div class="mt-5 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
    <p class="font-bold">Zapisano zmiany</p>
    <p class="text-sm">{{ $message }}</p>
</div>
@endif

@if ($message = Session::get('success-created'))
<div class="mt-5 bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
    <p class="font-bold">Utworzono nowy post</p>
    <p class="text-sm">{{ $message }}</p>
</div>
@endif

@if ($message = Session::get('success-destroyed'))
<div class="mt-5 bg-yellow-100 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3" role="alert">
    <p class="font-bold">Usunięto post</p>
    <p class="text-sm">{{ $message }}</p>
</div>
@endif

{{-- <div class="p-2 lg:p-16">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 m-5 mb-10">
        @foreach ($posts as $post)
        <div
            class="bg-white overflow-hidden hover:bg-blue-100 border border-gray-200 p-3"
        >
            <div class="m-2 text-justify text-sm">
                {{ setlocale(LC_ALL, 'pl_PL') }}
                <p class="text-right text-xs">{{ Illuminate\Support\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('F j, Y, H:i') }}</p>
                <p class="text-right text-xs">{{ $post->user->name }}</p>
                <a href="{{ route('edit-post', $post) }}">
                    <h2 class="font-bold text-lg h-2 mb-8">{{ $post->title }}</h2>
                </a>
                <img class="object-fill max-h-96 w-full" src="{{ asset('/storage/'.$post->post_image) }}" />
                <p class="text-md mt-2">
                    {{ Str::limit($post->body, '120', '...') }}
                </p>
            </div>
            <div class="w-full flex flex-row-reverse float-right text-right mt-4">
                <form method="POST" action="{{ route('destroy-post', $post) }}">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="text-red-400 uppercase font-bold text-sm focus:outline-none" href="#"
                    >Usuń</button
                    >
                </form>
                <button class="text-blue-400 uppercase font-bold text-sm mx-2 focus:outline-none"
                    > <a href="{{ route('edit-post', $post) }}">Edytuj</a>
                    </button
                >
            </div>
        </div>
        @endforeach
    </div>
</div> --}}

<!-- This is an example component -->
<section class="flex flex-row flex-wrap mx-auto">
    @foreach ($posts as $post)
        <!-- Card Component -->
      <div
      class="transition-all duration-150 flex w-full px-4 py-6 md:w-1/2 lg:w-1/3"
        >
        <div
            class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl"
        >
            <div class="md:flex-shrink-0">
            <img
                src="{{ asset('/storage/'.$post->post_image) }}"
                alt="Blog Cover"
                class="object-fill w-full rounded-lg rounded-b-none md:h-56"
            />
            </div>
            <hr class="border-gray-300" />
            <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
            <a href="#" class="hover:underline">
                <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                {{ $post->title }}
                </h2>
            </a>
            </div>
            <hr class="border-gray-300" />
            <p
            class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700"
            >
            {{ Str::limit($post->body, '300', '...') }}
            </p>
            <hr class="border-gray-300" />
            <section class="px-4 py-2 mt-2">
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center flex-1">
                <img
                    class="object-cover h-10 rounded-full"
                    src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                    alt="Avatar"
                />
                <div class="flex flex-col mx-2">
                    <a href="" class="font-semibold text-gray-700 hover:underline">
                    {{ $post->user->name }}
                    </a>
                    <span class="text-xs text-gray-600">
                        {{ Illuminate\Support\Carbon::createFromFormat('Y-m-d H:i:s', $post->created_at)->format('F j, Y H:i') }}
                    </span>
                </div>
                </div>
                <p class="mt-1 text-xs text-gray-600">
                    {{ $post->created_at->diffForHumans() }}
                </p>
            </div>
            <hr class="border-gray-300" />
            <div class="flex items-center justify-between px-4 pt-2 overflow-hidden">
                <a class="text-xs font-bold text-blue-600 uppercase" href="{{ route('edit-post', $post) }}">
                    Edytuj
                </a>
                <form method="POST" action="{{ route('destroy-post', $post) }}">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="text-xs font-bold text-red-600 uppercase focus:outline-none">
                        Usuń
                    </button>
                </form>
            </div>
            </section>
        </div>
        </div>
    @endforeach
</section>

@endsection
