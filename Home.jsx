import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  // 🔹 Clear previous selection when user comes to Home
  useEffect(() => {
    localStorage.removeItem("selectedCity");
  }, []);

  const handleContinue = () => {
    if (!city) return;

    // 🔹 Save selected city (used to enable Recommendations link)
    localStorage.setItem("selectedCity", city);

    navigate("/recommendations", { state: { city } });
  };

  return (
    <div className="section">
      <h2>Welcome to LocalScout</h2>
<p style={{ color: "#555" }}>
  Discover nearby places that match your moment.
</p>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="">-- Select city --</option>
        <option value="Tirupati">Tirupati</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
      </select>

      <br /><br />

      <button onClick={handleContinue} disabled={!city}>
        Find Nearby Places →
      </button>
    </div>
  );
}

export default Home;
