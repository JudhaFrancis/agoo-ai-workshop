# Backend Documentation

## Technology Stack
- **Framework**: Laravel 12.0
- **Language**: PHP 8.2+
- **Database**: MySQL (XAMPP Environment)
- **API**: Inertia.js (PHP-side controllers)

## Project Structure
- **Controllers**: `app/Http/Controllers` (Handlers for routes)
- **Models**: `app/Models` (Eloquent ORM)
- **Migrations**: `database/migrations` (Schema definitions)
- **Seeders**: `database/seeders` (Initial data population)
- **Routes**: `routes/web.php` (Web routes) and `routes/api.php` (Ajax/JSON routes)

## Key Features
- **Inertia.js Integration**: Controllers return `Inertia::render()` with data.
- **Authentication**: Laravel Breeze (Sanctum) for session-based auth.
- **Configuration**: Managed via `.env` file.
- **Media Handling**: Storage linked to `public/storage`.
- **Search API**: Custom endpoint for debounced product and category suggestions.

## Development Workflow
- **Artisan**: Used for migrations, model generation, and clear-cache commands.
- **Composer**: Dependency management for PHP packages.
- **Local Server**: Typically runs via `php artisan serve` or XAMPP's Apache.
