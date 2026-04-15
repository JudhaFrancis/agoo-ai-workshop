# Deployment Documentation

## Local Development (XAMPP/Windows)
1.  **Clone code**: Put the repository in `c:/xampp/htdocs/benny_cards`.
2.  **Environment Setup**:
    - Copy `.env.example` to `.env`.
    - Configure `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`.
3.  **Dependencies**:
    - Run `composer install`.
    - Run `npm install`.
4.  **Database**:
    - Create a database in PHPMyAdmin.
    - Run `php artisan migrate --seed`.
5.  **Build Assets**:
    - Run `npm run build` or `npm run dev`.
6.  **Access**: Open `http://localhost/benny_cards/public` in the browser.

## Server Deployment
1.  **Server Requirements**: PHP 8.2+, MySQL, Apache/Nginx.
2.  **Steps**:
    - Archive and upload vendor/node_modules (if not installing on server).
    - Configure server VirtualHost to point to the `public/` directory.
    - Set file permissions for `storage/` and `bootstrap/cache/`.
    - Generate unique App Key: `php artisan key:generate`.
3.  **Optimization**:
    - `php artisan config:cache`
    - `php artisan route:cache`
    - `php artisan view:cache`
4.  **SSL/HTTPS**: Ensure your `.env` has `APP_URL` with `https://` if using SSL.
