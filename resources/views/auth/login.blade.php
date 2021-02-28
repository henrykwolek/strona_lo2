@extends('layouts.app') @section('content')

<div class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="mb-4">
            <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="email"
            >
                Adres email
            </label>
            <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-grey-darker @error('email') border-2 border-red-500 @enderror"
                id="email"
                name="email"
                type="mail"
                placeholder="Adres email"
            />
            @error('email')
            <p class="text-red-500 text-xs my-1" role="alert">
                <strong>{{ $message }}</strong>
            </p>
            @enderror
        </div>
        <div class="mb-6">
            <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
            >
                Hasło
            </label>
            <input
                class="shadow appearance-none rounded w-full py-2 px-3 text-grey-darker mb-3 @error('email') border-2 border-red-500 @enderror"
                id="password"
                name="password"
                type="password"
                placeholder="**********"
            />
            @error('email')
            <p class="text-red-500 text-xs my-1" role="alert">
                <strong>{{ $message }}</strong>
            </p>
            @enderror
        </div>
        <div class="flex items-center justify-between">
            <button
                class="bg-blue-600 text-white hover:bg-blue-800 font-bold py-2 px-4 rounded"
                type="submit"
            >
                Zaloguj się
            </button>
            <a
                class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
            >
                Zapomniane hasło
            </a>
        </div>
    </form>
</div>

{{--
<div class="container">
    <div class="mx-auto flex flex-col">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __("Login") }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label
                                for="email"
                                class="col-md-4 col-form-label text-md-right"
                                >{{ __("E-Mail Address") }}</label
                            >

                            <div class="col-md-6">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control @error('email') is-invalid @enderror"
                                    name="email"
                                    value="{{ old('email') }}"
                                    required
                                    autocomplete="email"
                                    autofocus
                                />

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label
                                for="password"
                                class="col-md-4 col-form-label text-md-right"
                                >{{ __("Password") }}</label
                            >

                            <div class="col-md-6">
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control @error('password') is-invalid @enderror"
                                    name="password"
                                    required
                                    autocomplete="current-password"
                                />

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input"
                                    type="checkbox" name="remember"
                                    id="remember"
                                    {{ old("remember") ? "checked" : "" }}>

                                    <label
                                        class="form-check-label"
                                        for="remember"
                                    >
                                        {{ __("Remember Me") }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __("Login") }}
                                </button>

                                @if (Route::has('password.request'))
                                <a
                                    class="btn btn-link"
                                    href="{{ route('password.request') }}"
                                >
                                    {{ __("Forgot Your Password?") }}
                                </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
--}} @endsection
