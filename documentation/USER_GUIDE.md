# Edom Restaurant User Guide

## 1. Project Overview

Edom Restaurant is a full-stack restaurant website that allows customers to:

- View restaurant information
- Browse the menu
- View the gallery
- Submit table reservations
- Send contact messages

The system also sends email notifications and saves reservation and contact information in a MySQL database.

## 2. Opening the Website

### Live Website

Open this address in a web browser:

https://edom-restaurant.vercel.app

### Local Website

Make sure the frontend, backend, WAMP, and MySQL are running.

Open:

http://localhost:5173

## 3. Website Navigation

Use the navigation menu at the top of the website:

- Home
- About
- Menu
- Gallery
- Contact
- Reservation

## 4. Making a Reservation

1. Open the Reservation page.
2. Enter your full name.
3. Enter your email address.
4. Enter your phone number.
5. Enter the number of guests.
6. Choose a reservation date.
7. Choose a reservation time.
8. Enter any special requests.
9. Click **Submit Reservation**.

When the reservation is successful, the website displays:

**Reservation saved and sent successfully!**

The reservation is:

- Saved in the MySQL `reservations` table
- Sent to the restaurant owner by email

## 5. Sending a Contact Message

1. Open the Contact page.
2. Enter your full name.
3. Enter your email address.
4. Enter the subject.
5. Enter your message.
6. Click **Send Message**.

When the message is successful, the website displays:

**Message saved and sent successfully!**

The message is:

- Saved in the MySQL `contact_messages` table
- Sent to the restaurant owner by email

## 6. Checking Reservation Emails

1. Open the Gmail account connected to the project.
2. Look for an email with the subject:

**New Restaurant Reservation**

3. Open the email to view the customer’s name, email, phone number, date, time, number of guests, and special request.

## 7. Checking Contact Emails

1. Open the Gmail account connected to the project.
2. Look for an email with a subject beginning with:

**Contact Message:**

3. Open the email to view the sender’s name, email address, subject, and message.

## 8. Viewing Reservations in MySQL

1. Start WAMP and wait for the icon to turn green.
2. Open phpMyAdmin.
3. Click the `edom_restaurant` database.
4. Click the `reservations` table.
5. Click **Browse**.

All saved reservations will appear in the table.

## 9. Viewing Contact Messages in MySQL

1. Open phpMyAdmin.
2. Click the `edom_restaurant` database.
3. Click the `contact_messages` table.
4. Click **Browse**.

All saved contact messages will appear in the table.

## 10. Troubleshooting

### The website does not open locally

Make sure the frontend is running with:

```bash
npm run dev

### The backend does not work

Make sure the backend is running with:

```bash
node server.js

### The database does not work

Make sure WAMP is running and the WAMP icon is green.

### Email is not received

Check:

- Gmail Inbox
- Spam folder
- Gmail App Password
- `.env` settings

## 11. Project Owner

Project Name: Edom Restaurant  
Developer: Edom Eyob  
Project Type: Full-Stack Restaurant Reservation Application
