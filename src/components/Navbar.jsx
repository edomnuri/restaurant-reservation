import { NavLink } from "react-router-dom";

function Navbar() {
  function linkClass({ isActive }) {
    return isActive ? "nav-link active-link" : "nav-link";
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          🍽️ Edom Restaurant
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#restaurantNavbar"
          aria-controls="restaurantNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="restaurantNavbar"
        >
          <div className="navbar-nav ms-auto">
            <NavLink className={linkClass} to="/">
              Home
            </NavLink>

            <NavLink className={linkClass} to="/about">
              About
            </NavLink>

            <NavLink className={linkClass} to="/menu">
              Menu
            </NavLink>

            <NavLink className={linkClass} to="/gallery">
              Gallery
            </NavLink>

            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>

            <NavLink className={linkClass} to="/reservation">
              Reservation
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;