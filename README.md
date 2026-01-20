# Backend Setup (REQUIRED FIRST)
Step 1: Go to backend folder
cd booking-backend

Step 2: Install dependencies
npm install

Step 3: Create .env file

Inside booking-backend/.env

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/booking-system


(Replace MONGO_URI if using MongoDB Atlas)

Step 4: Start backend server
npm start


Expected output:

Server running on port 3000
MongoDB connected

# Frontend Setup
Step 1: Open a NEW terminal

(Do NOT stop backend)

cd booking-frontend

Step 2: Install dependencies
npm install

Step 3: Start frontend
npm run dev


Expected output:

Local: http://localhost:5173
# Full Stack Booking Lifecycle System

This project implements a simplified booking lifecycle system for an on-demand home services marketplace.

The focus is on:
- State management
- Lifecycle transitions
- Failure handling
- Admin/ops control
- Observability

UI is intentionally minimal.

---

## Tech Stack

**Backend**
- Node.js
- Express
- MongoDB (Mongoose)

**Frontend**
- React (Vite)
- Axios

---

## Booking Lifecycle

PENDING → ASSIGNED → IN_PROGRESS → COMPLETED

### Failure States
- CANCELLED (customer or provider)
- FAILED (provider no-show or rejection)

Invalid transitions are explicitly blocked.

---

## Key Design Decisions

### 1. Stateless API with explicit state transitions
Each lifecycle step is a dedicated endpoint to prevent illegal transitions.

### 2. Admin / Ops driven system
Authentication is intentionally omitted.  
The UI simulates admin and provider actions using IDs.

### 3. Explicit validation
- MongoDB ObjectId validation
- State-based transition guards
- Clear error messages for invalid operations

### 4. Event-oriented thinking
Each state change is treated as a meaningful lifecycle event (extensible to event logs).

---

## Running the Project

### Backend
```bash
cd booking-backend
npm install
npm run dev
