import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7f8",
        animation: "fadeIn 0.6s ease",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "36px",
          borderRadius: "18px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
          animation: "slideUp 0.6s ease",
        }}
      >
       <div style={{ textAlign: "center", marginBottom: "10px" }}>
  <div style={{ fontSize: "2.2rem" }}>📍🔍</div>
  <h2 style={{ margin: 0 }}>LocalScout</h2>
</div>



        <p style={{ textAlign: "center", color: "#666", marginBottom: "28px" }}>
  Discover nearby places that match your moment.
</p>


        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "14px",
            borderRadius: "28px",
            fontSize: "1rem",
            fontWeight: "600",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#777",
            marginTop: "20px",
          }}
        >
          This is a demo login (no real authentication)
        </p>
      </div>
    </div>
  );
}

/* INPUT STYLE */
const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "1rem",
};

export default Login;
