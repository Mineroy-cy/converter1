import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const currentPage =
    currentPath.includes("conversion")
      ? "Conversion"
      : currentPath.includes("arithmetic")
      ? "Arithmetic"
      : "Home";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const goBack = () => navigate("/");

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Back button (only if not on home) */}
        {currentPage !== "Home" ? (
          <button className="back-btn" onClick={goBack}>
            ←
          </button>
        ) : (
          <span style={{ width: "2rem" }}></span>
        )}

        {/* Page title */}
        <h2 className="navbar-title">{currentPage}</h2>

        {/* Hamburger toggle */}
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Slide-down menu */}
      {menuOpen && (
        <div className="menu-panel">
          <Link to="/" onClick={closeMenu} className="menu-item">
            Home
          </Link>
          <Link to="/conversion" onClick={closeMenu} className="menu-item">
            Conversion
          </Link>
          <Link to="/arithmetic" onClick={closeMenu} className="menu-item">
            Arithmetic
          </Link>
        </div>
      )}
    </nav>
  );
}
