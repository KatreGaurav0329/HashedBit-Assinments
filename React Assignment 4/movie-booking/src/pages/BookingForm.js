import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dhurandhar from "../assets/Dhurandhar.jpg";
import Avatar from "../assets/Avatar.png";
import Border2 from "../assets/Border2.png";
import HouseMaid from "../assets/housemaid.png";
import Happy from "../assets/Happy.png";

const movies = [
  { id: 1, name: "Dhurandhar", img: Dhurandhar },
  { id: 2, name: "Avatar: Fire and Ash", img: Avatar },
  { id: 3, name: "Border 2", img: Border2 },
  { id: 4, name: "The Housemaid", img: HouseMaid },
  { id: 5, name: "Happy Patel", img: Happy },
];

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/confirmation", {
      state: {
        ...form,
        movieName: movie.name,
        movieImg: movie.img,
        bookingId: Math.floor(Math.random() * 1000000)
      }
    });
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Book Seat for {movie.name}</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
        }}
      >
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />

        <input
          placeholder="Mobile"
          value={form.mobile}
          onChange={e => setForm({ ...form, mobile: e.target.value })}
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#4f46e5",
            color: "white",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
