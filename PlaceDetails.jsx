import { useLocation, useNavigate } from "react-router-dom";

function PlaceDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    navigate("/recommendations");
    return null;
  }

  const { name, rating, distance, open } = state;

  return (
    <div className="section">
      <h2>{name}</h2>

      <p>
        ⭐ <strong>Rating:</strong> {rating}
      </p>

      <p>
        📍 <strong>Distance:</strong> {distance} km
      </p>

      <p>
        🕒 <strong>Status:</strong>{" "}
        {open ? "Open Now" : "Currently Closed"}
      </p>

      <br />

      <button onClick={() => navigate(-1)}>
        ← Back to Recommendations
      </button>
    </div>
  );
}

export default PlaceDetails;
