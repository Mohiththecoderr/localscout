import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import MoodSelector from "../components/MoodSelector";
import PlaceCard from "../components/PlaceCard";

/* 🔹 CITY DATA (MOCK REALISTIC DATA) */
const CITY_DATA = {
  Tirupati: {
    location: { lat: 13.6288, lng: 79.4192 },
    places: [
      { name: "Hotel Bliss", rating: 4.4, open: true, distance: 0.6 },
      { name: "PS4 Restaurant", rating: 4.1, open: true, distance: 0.8 },
      { name: "Minerva Coffee Shop", rating: 4.5, open: false, distance: 1.1 },
    ],
  },
  Hyderabad: {
    location: { lat: 17.385, lng: 78.4867 },
    places: [
      { name: "Cafe Niloufer", rating: 4.6, open: true, distance: 0.4 },
      { name: "Paradise Biryani", rating: 4.3, open: true, distance: 0.9 },
      { name: "Chutneys", rating: 4.4, open: false, distance: 1.2 },
    ],
  },
  Bangalore: {
    location: { lat: 12.9716, lng: 77.5946 },
    places: [
      { name: "CTR", rating: 4.5, open: true, distance: 0.5 },
      { name: "MTR", rating: 4.6, open: true, distance: 0.7 },
      { name: "Cafe Coffee Day", rating: 4.0, open: false, distance: 1.3 },
    ],
  },
};

function Recommendations() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const city = state?.city;

  const [mood, setMood] = useState("");
  const [sortBy, setSortBy] = useState("");

  if (!city) {
    navigate("/");
    return null;
  }

  const { location, places } = CITY_DATA[city];

  /* 🔹 FILTER BY MOOD */
  const filteredPlaces = places.filter((place) => {
    if (mood === "work") return place.rating >= 4.5;
    if (mood === "quick") return place.distance <= 1;
    if (mood === "budget") return place.rating <= 4.0;
    if (mood === "date") return place.rating >= 4.2 && place.open;
    return true;
  });

  /* 🔹 SORT */
  const sortedPlaces = [...filteredPlaces].sort((a, b) => {
    if (sortBy === "distance") return a.distance - b.distance;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <>
      {/* MAP */}
      <div className="section">
        <iframe
          title="map"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=14&output=embed`}
        />
      </div>

      {/* MOOD */}
      <div className="section">
        <MoodSelector onSelectMood={setMood} />
        <p><strong>Selected mood:</strong> {mood}</p>
      </div>

      {/* SORT */}
      <div className="section">
        <label>
          Sort by:{" "}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">None</option>
            <option value="distance">Distance</option>
            <option value="rating">Rating</option>
          </select>
        </label>
      </div>

      {/* PLACES */}
      <div className="section">
        <h2>Nearby Places in {city}</h2>

        {sortedPlaces.length === 0 && (
          <p className="empty">No places found for this mood 😕</p>
        )}

        {sortedPlaces.map((place, index) => (
          <PlaceCard
            key={index}
            place={place}
            onClick={() => navigate(`/place/${index}`, { state: place })}
          />
        ))}
      </div>
    </>
  );
}

export default Recommendations;
