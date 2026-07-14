# Edom Restaurant Testing Report

## 1. Project Information

Project Name: Edom Restaurant  
Developer: Edom Eyob  
Project Type: Full-Stack Restaurant Reservation Application  

## 2. Testing Purpose

The purpose of this testing report is to confirm that the main website features work correctly.

The following parts were tested:

- Website navigation
- Reservation form
- Contact form
- MySQL database
- Email notifications
- Local frontend
- Local backend
- Live website

## 3. Website Navigation Test

### Test Steps

1. Open the website.
2. Click the Home page.
3. Click the About page.
4. Click the Menu page.
5. Click the Gallery page.
6. Click the Contact page.
7. Click the Reservation page.

### Expected Result

Each page should open correctly.

### Actual Result

All pages opened correctly.

### Status

**Passed**

## 4. Reservation Form Test

### Test Steps

1. Open the Reservation page.
2. Enter the customer name.
3. Enter the email address.
4. Enter the phone number.
5. Select the reservation date.
6. Select the reservation time.
7. Enter the number of guests.
8. Enter a special request.
9. Click **Submit Reservation**.

### Expected Result

The website should show:

```text
Reservation saved and sent successfully!

The reservation should be saved in the database and sent by email.

Actual Result

The reservation was submitted successfully.

The reservation was:

Saved in the reservations table
Sent to Gmail
Displayed with a success message
Status

Passed

5. Contact Form Test
Test Steps
Open the Contact page.
Enter the full name.
Enter the email address.
Enter the subject.
Enter the message.
Click Send Message.
Expected Result

The website should show:

Message saved and sent successfully!

The contact message should be saved in the database and sent by email.

Actual Result

The contact message was submitted successfully.

The message was:

Saved in the contact_messages table
Sent to Gmail
Displayed with a success message
Status

Passed

6. MySQL Database Test
Test Steps
Start WAMP.
Open phpMyAdmin.
Open the edom_restaurant database.
Open the reservations table.
Open the contact_messages table.
Expected Result

Reservation and contact records should appear in the database.

Actual Result

The records appeared correctly in both tables.

Status

Passed

7. Email Notification Test
Test Steps
Submit a reservation.
Check Gmail.
Submit a contact message.
Check Gmail again.
Expected Result

A reservation email and a contact email should be received.

Actual Result

Both emails were received successfully.

Status

Passed

8. Backend Test
Test Steps
Open the terminal in the backend folder.
Run:
node server.js
Expected Result

The terminal should show:

Server is running on port 5000
Actual Result

The backend started successfully on port 5000.

Status

Passed

9. Frontend Test
Test Steps
Open the terminal in the restaurant-vite folder.
Run:
npm run dev
Expected Result

The frontend should open at:

http://localhost:5173
Actual Result

The frontend opened successfully.

Status

Passed

10. Live Website Test
Test Steps
Open the live website:
https://edom-restaurant.vercel.app
Test the website pages.
Test the reservation form.
Test the contact form.
Expected Result

The deployed website should open and work correctly.

Actual Result

The live website opened successfully and the forms worked.

Status

Passed

11. Final Test Result

All main project features were tested successfully.

The website, forms, database, backend, email notifications, and live deployment are working correctly.

Overall Status

Passed