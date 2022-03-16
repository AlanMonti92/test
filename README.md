Installation
Clone the repo local:

git clone https://github.com/AlanMonti92/test.git
Install PHP dependencies:
composer install

Install NPM dependencies:
npm install

Build assets:
npm run dev

Setup configuration:
cp .env.example .env

Generate application key:
php artisan key:generate

Create an Mysql database.
DataBase name = test

Run database migrations && seed:
php artisan migrate --seed

Run artisan server:
php artisan serve
