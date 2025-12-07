# Store Rating Platform

A full-stack web application for submitting and managing store ratings. The platform supports **role-based access** for Normal Users, Store Owners, and System Administrators.

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js (Express.js)  
- **Database:** PostgreSQL / MySQL  

---

## Prerequisites

- Node.js v18+  
- npm or yarn  
- PostgreSQL or MySQL installed locally or on a server  

---

## Installation
### 1. Clone the repository
cd store-rating-platform


## Backend installation
```bash
cd backend
npm install
```
## Configure environment variables
Create a .env file in the backend folder with the following:
```bash
DB_HOST=localhost
DB_PORT=5432        # or 3306 for MySQL
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=store_rating_db
JWT_SECRET=your_secret_key
PORT=5000
```
## Frontend
```bash
cd ../frontend
npm install
```
Set API URL in .env:
```bash
REACT_APP_API_URL=http://yourlocalhost/api
```
## Start frontend
```bash
npm run dev
```


Create a .env file in the backend folder with the following:

