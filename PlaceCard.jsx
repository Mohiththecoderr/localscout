function PlaceCard({ place, onClick }) {
  return (
    <div className="place-card" onClick={onClick}>
      <h3>{place.name}</h3>

      <p>⭐ Rating: {place.rating}</p>

      {place.distance !== undefined && (
        <p>📍 Distance: {place.distance} km</p>
      )}

      <p>
        🕒 Status: {place.open ? "Open Now" : "Closed"}
      </p>
    </div>
  );
}

export default PlaceCard;
