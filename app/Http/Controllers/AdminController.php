<?php

namespace App\Http\Controllers;

use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use Intervention\Image\ImageManagerStatic;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function dashboard(Post $post)
    {
        $posts = Post::orderBy('id', 'DESC')->paginate(10);
        return view('admin.admin-index', [
            "posts" => $posts
        ]);
    }

    public function createNewPost()
    {
        return view('admin.new-post');
    }

    public function saveNewPost(Request $request)
    {
        $inputs = $request->validate([
            "title" => "required|string|min:8",
            "body" => "required|string|min:10",
            "post_image" => "image:jpeg,jpg,png,webp,jfif"
        ]);
        
        if ($request->hasFile('post_image')) {
            $inputs['post_image'] = $request->post_image->store('images', 'public');
        }

        auth()->user()->posts()->create($inputs);
        return redirect()->route('dashboard')->with('success-created', 'Nowy post znajduje się teraz na stronie głównej');
    }

    public function editPost(Post $post)
    {
        return view('admin.edit-post', [
            "post" => $post
        ]);
    }

    public function updatePost(Request $request, Post $post)
    {
        $inputs = $request->validate([
            "title" => "required|string|min:8",
            "body" => "required|string|min:10",
            "post_image" => "image:jpeg,jpg,png,webp,jfif"
        ]);

        if ($request->hasFile('post_image')) {
            $inputs['post_image'] = $request->post_image->store('images', 'public');
            $post->post_image = $inputs['post_image'];
        }

        $post->title = $inputs['title'];
        $post->body = $inputs['body'];

        auth()->user()->posts()->save($post);

        return redirect()->route('dashboard')->with('success-saved', 'Zmiany zostały zapisane');
    }

    public function destroyPost(Post $post)
    {
        $post->delete();
        return redirect()->route('dashboard')->with('success-destroyed', 'Post został pomyślnie usunięty');
    }

    public function showUser(User $user)
    {
        return view('admin.view-profile', [
            "user" => $user
        ]);
    }

    public function updateUser(User $user, Request $request)
    {
        // if (bcrypt($request->password) == $user->password) {
        //     //
        // }

        dd($request->all());
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
