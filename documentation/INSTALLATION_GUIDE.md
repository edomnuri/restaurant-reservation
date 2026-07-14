# Edom Restaurant Installation Guide

## 1. Required Software

Install these programs before running the project:

- Visual Studio Code
- Node.js
- WAMP Server
- Git
- A web browser such as Chrome

## 2. Project Folders

The main project contains:

- `backend` — Node.js and Express backend
- `restaurant-vite` — React and Vite frontend
- `documentation` — project guides
- `database` — SQL database backup

## 3. Install Backend Packages

Open a terminal in the `backend` folder:

```bash
cd backend
Install the backend packages:

npm install

The backend uses:

Express
CORS
Nodemailer
Dotenv
MySQL2
4. Create the Backend Environment File

Inside the backend folder, create a file named:

.env

Add:

GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=edom_restaurant
DB_PORT=3306

Replace the Gmail information with the correct email and Gmail App Password.

Do not upload the .env file to GitHub.

5. Import the MySQL Database
Start WAMP.
Wait until the WAMP icon turns green.
Open phpMyAdmin.
Click New and create a database named:
edom_restaurant
Click the edom_restaurant database.
Click Import.
Select the file:
edom_restaurant.sql
Click Go.

The database should contain:

reservations
contact_messages
6. Start the Backend

Open a terminal in the backend folder and run:

node server.js

The terminal should display:

Server is running on port 5000

Open:

http://localhost:5000

The browser should display:

Edom Restaurant backend and MySQL are running.
7. Install Frontend Packages

Open another terminal and go to the React frontend folder:

cd restaurant-vite

Install the frontend packages:

npm install
8. Start the Frontend

Run:

npm run dev

The terminal should show an address similar to:

http://localhost:5173

Open that address in the browser.

9. Test the Reservation Form
Open the Reservation page.
Fill in all required fields.
Click Submit Reservation.
Confirm that the success message appears.
Check Gmail for the reservation email.
Check phpMyAdmin:
edom_restaurant → reservations → Browse.
10. Test the Contact Form
Open the Contact page.
Fill in all required fields.
Click Send Message.
Confirm that the success message appears.
Check Gmail for the contact email.
Check phpMyAdmin:
edom_restaurant → contact_messages → Browse.
11. Live Website

The deployed website is available at:

https://edom-restaurant.vercel.app

The live website uses Vercel for deployment.

12. Troubleshooting
WAMP is not working

Restart WAMP and wait until the icon turns green.

Backend does not start

Make sure you are inside the backend folder and run:

npm install
node server.js
Frontend does not start

Make sure you are inside the restaurant-vite folder and run:

npm install
npm run dev
MySQL connection fails

Check the database name and .env settings.

Email does not send

Check:

Gmail address
Gmail App Password
.env file
Internet connection
13. Project Information

Project Name: Edom Restaurant
Developer: Edom Eyob
Project Type: Full-Stack Restaurant Reservation Application