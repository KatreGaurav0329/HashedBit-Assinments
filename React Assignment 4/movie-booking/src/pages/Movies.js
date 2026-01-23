import { useNavigate } from "react-router-dom";
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

function Movies() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Movie Booking</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
          marginTop: "30px"
        }}
      >
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img
              src={movie.img}
              alt={movie.name}
              style={{
                width: "250px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
