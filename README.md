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
