# Task Tracker Frontend

## Overview

This is the frontend application for the **Task Tracker System**.  
It allows users to register, log in, and manage their tasks through a clean and responsive interface.

The frontend communicates with the backend API using JWT authentication and provides a simple UI for task management.

---

## Tech Stack

- React
- Vite
- Axios
- React Router
- CSS

---

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Tasks
- View Tasks
- Update Task Status
- Delete Tasks
- Logout functionality
- Error handling and validation
- Responsive layout

---

## Project Structure
```
src/
api/
components/
context/
pages/
routes/
App.jsx
main.jsx
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:
```
VITE_API_URL=http://localhost:5000
```

An example file is provided:
```
.env.example
```

---

## Installation

Clone the repository:
```
git clone https://github.com/IceManKR/RP-JTA-FrontEnd
```

Navigate to the project folder:
```
cd RP-JTA-FrontEnd
```

Install dependencies:
```
npm install
```

---

## Running the Application

Start the development server:

```
npm run dev
```

The application will run at:
```
http://localhost:5173
```

---

## Backend API

This frontend connects to the backend Task Tracker API.

Backend Repository:  
https://github.com/IceManKR/RP-JTA-Backend
