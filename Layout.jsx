import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("selectedCity");
    navigate("/login");
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <header
        className="section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        {/* APP TITLE */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
  <span style={{ fontSize: "1.4rem" }}>📍🔍</span>
  <h2 style={{ margin: 0, color: "#111" }}>LocalScout</h2>
</div>



        {/* NAV LINKS */}
        <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>

          {localStorage.getItem("selectedCity") ? (
            <NavLink to="/recommendations" style={linkStyle}>
              Recommendations
            </NavLink>
          ) : (
            <span style={disabledLinkStyle} title="Select a city first">
              Recommendations
            </span>
          )}

          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "0.9rem",
            }}
          >
            Logout
          </button>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

/* ACTIVE / NORMAL LINKS */
const linkStyle = ({ isActive }) => ({
  color: "#111",
  textDecoration: "none",
  fontWeight: isActive ? "700" : "500",
  borderBottom: isActive ? "2px solid #111" : "none",
  paddingBottom: "4px",
});

/* DISABLED LINK STYLE */
const disabledLinkStyle = {
  color: "#999",
  cursor: "not-allowed",
  fontWeight: "500",
};

export default Layout;
