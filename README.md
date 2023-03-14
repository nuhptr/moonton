## Laravel Reactjs Moonton Streaming Website

```sh
# Techstack
- Laravel
- Reactjs
- tailwindcss
- notion

# 3rd party library
- laravel breeze
- inertia (SPA client server side)
- Spatie (laravel roles)
- midtrans
- git-flow
```

## Dependencies

```sh
# breeze
$ composer require laravel/breeze --dev
$ php artisan breeze:install

# spatie
$ composer require spatie/laravel-permission
- add in config/app.php (services line)
  Spatie\Permission\PermissionServiceProvider::class,
$ php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
$ php artisan config:clear
$ php artisan migrate

# spatie seeder
$ php artisan make:seeder RoleTableSeeder
$ php artisan db:seed

$ php artisan make:seeder UserTableSeeder
fill the seeder and write
use App\Models\User;
$admin->assignRole('admin');
$ php artisan migrate:fresh --seed

# assignRole
# User.php
use Spatie\Permission\Traits\HasRoles;
use ..., HasRoles;

# RegisteredUserController.php
$user->assignRole('user');

# spatie middleware
# add in kernel.php
'role' => \Spatie\Permission\Middlewares\RoleMiddleware::class,
```

## gitflow cmd

```sh
- git flow init

# create feature branch with name boilerplate based on development
$ git flow feature start boilerplate

# finish boilerplate
$ git flow feature finish boilerplate

# start release
$ git flow release start v0.1.0 => means v(major, standard, small)

# push
$ git push origin --tags
```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
