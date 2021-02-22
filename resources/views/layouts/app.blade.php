<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    {{-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script> --}}
    <script src="https://kit.fontawesome.com/497fca77ec.js" crossorigin="anonymous"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
        }
    </style>
</head>
<body>
    <div id="navbar"></div>
    {{-- <div id="gallery"></div> --}}
    <div class="px-4 w-full mx-auto flex flex-col lg:flex md:flex md:flex-row lg:flex-row lg:w-9/12">
        <div class="w-full lg:w-3/12 md:w-4/12 mb-4">
            <div id="LeftSidebar"></div>
        </div>
        <div class="w-full mx-2 lg:w-6/12 lg:block md:w-8/12">
            @yield('content')
        </div>
        <div class="w-full lg:w-3/12 md:hidden sm:block lg:block">
            <div id="RightSidebar"></div>
        </div>
    </div>
</body>
</html>
