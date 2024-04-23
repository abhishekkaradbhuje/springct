# Project Name
Spring CT

## Description
This is the assignment for Spring CT

## Requirements

- NodeJS 20.11
- Composer 2.2.6

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/abhishekkaradbhuje/springct.git
    ```
2. Checkout to development branch:
    ```bash
    git checkout origin/development
    ```

3. Navigate to the project directory:
    ```bash
    cd springct
    ```
4. Navigate to the backend directory:
    ```bash
    cd backend
    ```
5. Install dependecies:
    ```bash
    composer install
    ```
6. Create a DB in mysql and update configuration in .env file
     ```bash
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=springct
    DB_USERNAME=root
    DB_PASSWORD=root
    ```
7. Run database migration:
    ```bash
    php artisan migrate
    ```
8. Start backend laravel:
    ```bash
    php artisan serve
    ```
9. Navigate to the frontend:
    ```bash
    cd frontend
    ```
10. Install dependecies:
    ```bash
    npm install
    ```
11. Run frontend:
    ```bash
    npm start
    ```
