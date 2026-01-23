import { useParams, useNavigate } from "react-router-dom";
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

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Movie Details</h2>

      {movie && (
        <>
          <img
            src={movie.img}
            alt={movie.name}
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 6px 15px rgba(0,0,0,0.2)"
            }}
          />

          <h3 style={{ marginTop: "20px" }}>{movie.name}</h3>
          <p style={{ maxWidth: "500px", margin: "10px auto" }}>
            Enjoy an amazing cinematic experience.
          </p>
        </>
      )}

      <button
        onClick={() => navigate(`/book/${id}`)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#4f46e5",
          color: "white"
        }}
      >
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;
