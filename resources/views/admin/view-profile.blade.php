@extends('layouts.admin') @section('admin-content')

<h1 class="text-3xl text-center py-4">Zmiana hasła</h1>
<div class="lg:w-6/12 md:w-full mx-auto flex lg:flex-row md:flex-col">
    <div class="flex flex-col w-full">
        <form action="{{ route('update-profile', Auth::user()) }}" method="POSTs">
            @csrf
            @method('PATCH')
            <div class="mb-4">
                <input
                    class="shadow appearance-none rounded w-full py-2 px-3 text-grey-darker @error('current_password') border-2 border-red-500 @enderror"
                    id="current_password"
                    name="current_password"
                    type="password"
                    placeholder="Obecne hasło"
                />
                @error('current_password')
                    <p class="text-red-500 text-xs my-1" role="alert">
                        <strong>{{ $message }}</strong>
                    </p>
                @enderror
            </div>
            <div class="mb-4">
                <input
                    class="shadow appearance-none rounded w-full py-2 mt-3 px-3 text-grey-darker @error('password') border-2 border-red-500 @enderror"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Nowe hasło"
                />
                @error('password')
                    <p class="text-red-500 text-xs my-1" role="alert">
                        <strong>{{ $message }}</strong>
                    </p>
                @enderror
            </div>
            <div class="mb-4">
                <input
                    class="shadow appearance-none rounded w-full py-2 mt-3 px-3 text-grey-darker @error('password_confirmation') border-2 border-red-500 @enderror"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Powtórz nowe hasło"
                />
                @error('password_confirmation')
                    <p class="text-red-500 text-xs my-1" role="alert">
                        <strong>{{ $message }}</strong>
                    </p>
                @enderror
            </div>
            <div class="flex float-right">
                <button
                    class="bg-blue-600 text-white hover:bg-blue-800 font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Zmień hasło
                </button>
            </div>
        </form>
    </div>
</div>

@endsection