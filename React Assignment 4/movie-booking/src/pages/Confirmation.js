import { useLocation } from "react-router-dom";

function Confirmation() {
  const { state } = useLocation();

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        maxWidth: "500px",
        margin: "50px auto",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
      }}
    >
      <h2>Seat Booked Successfully!</h2>

      <img
        src={state.movieImg}
        alt={state.movieName}
        style={{
          width: "200px",
          height: "280px",
          objectFit: "cover",
          borderRadius: "8px",
          margin: "20px 0"
        }}
      />

      <h3>{state.movieName}</h3>

      <p><b>Booking ID:</b> {state.bookingId}</p>
      <p><b>Name:</b> {state.name}</p>
      <p><b>Email:</b> {state.email}</p>
      <p><b>Mobile:</b> {state.mobile}</p>
    </div>
  );
}

export default Confirmation;
