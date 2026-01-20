import "./App.css";
import CreateBooking from "./pages/CreateBooking";
import BookingActions from "./pages/BookingActions";

function App() {
  return (
    <div className="container">
      <div className="page">
        <h1>Booking System – Admin / Ops Console By Ayush Kumar Jha</h1>

        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 32 }}>
          This UI simulates customer actions and admin lifecycle control for bookings
        </p>

        <div className="grid">
          <div className="card">
            <h3>Customer Simulation</h3>
            <CreateBooking />
          </div>

          <div className="card">
            <h3>Admin / Ops Controls</h3>
            <BookingActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
